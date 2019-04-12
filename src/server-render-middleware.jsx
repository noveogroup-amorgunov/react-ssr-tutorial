import url from 'url';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';

import routes from './routes';
import App from './components/App';
import configureStore from './store';
import rootSaga from './store/rootSaga';

export default (req, res) => {
    const location = req.url;
    const context = {};

    const { store } = configureStore({}, location);

    // Run saga
    store.runSaga(rootSaga).toPromise().then(() => {
        const statsFile = path.resolve('./dist/loadable-stats.json');
        const extractor = new ChunkExtractor({ statsFile });

        const jsx = extractor.collectChunks(
            <ReduxProvider store={store}>
                <StaticRouter context={context} location={location}>
                    <App />
                </StaticRouter>
            </ReduxProvider>
        );

        const reactDom = renderToString(jsx);
        const reduxState = store.getState();
        const helmetData = Helmet.renderStatic();

        if (context.url) {
            res.redirect(context.url);
            return;
        }

        res
            .status(context.status || 200)
            .send(htmlTemplate(reactDom, reduxState, helmetData, extractor));
    }).catch((err) => {
        console.error(err);
        throw err;
    });

    const dataRequirements = [];

    /**
     * Call the asyncFetchData method on the component-page
     * that corresponds to the current url (by router).
     *
     * We use `some` method to simulate working of the routes in react-router-dom
     * inside the Switch — selects the first found route.
     */
    routes.some((route) => {
        const match = matchPath(url.parse(location).pathname, route);
        const { component } = route;

        if (!match) {
            return false;
        }

        const fetchMethod = component.asyncFetchData
            || (component.WrappedComponent && component.WrappedComponent.asyncFetchData);

        if (fetchMethod) {
            dataRequirements.push(fetchMethod({
                dispatch: store.dispatch,
                match
            }));
        }

        return Boolean(match);
    });

    // When all async actions will be finished,
    // display action for close sage
    return Promise.all(dataRequirements)
        .then(() => store.close())
        .catch((err) => {
            console.error(err);
            throw err;
        });
};

function htmlTemplate(reactDom, reduxState = {}, helmetData, extractor) {
    const scriptTags = extractor.getScriptTags();
    const linkTags = extractor.getLinkTags();
    const styleTags = extractor.getStyleTags();

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="shortcut icon" href="/favicon.png">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            ${linkTags}
            ${styleTags}
        </head>
        <body>
            <div id="mount">${reactDom}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
            </script>
            ${scriptTags}
        </body>
        </html>
    `;
}
