import url from 'url';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { StaticRouter, matchPath } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet, { HelmetData } from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';
import { App } from './components/App/App';
import { configureStore } from './store/rootStore';
import rootSaga from './store/rootSaga';
import { getInitialState } from './store/getInitialState';
import routes from './routes';

export default (req: Request, res: Response) => {
    const location = req.url;
    const context: StaticRouterContext = {};
    const { store } = configureStore(getInitialState(location), location);

    function renderApp() {
        const statsFile = path.resolve('./dist/loadable-stats.json');
        const chunkExtractor = new ChunkExtractor({ statsFile });

        const jsx = chunkExtractor.collectChunks(
            <ReduxProvider store={store}>
                <StaticRouter context={context} location={location}>
                    <App />
                </StaticRouter>
            </ReduxProvider>
        );
        const reactHtml = renderToString(jsx);
        const reduxState = store.getState();
        const helmetData = Helmet.renderStatic();

        if (context.url) {
            res.redirect(context.url);
            return;
        }

        res.status(context.statusCode || 200).send(
            getHtml(reactHtml, reduxState, helmetData, chunkExtractor)
        );
    }

    store
        .runSaga(rootSaga)
        .toPromise()
        .then(() => renderApp())
        .catch(err => {
            throw err;
        });

    const dataRequirements: (Promise<void> | void)[] = [];

    /**
     * Call the fetchData method on the component-page
     * that corresponds to the current url (by router).
     *
     * We use `some` method to simulate working of the routes in react-router-dom
     * inside the Switch — selects the first found route.
     */
    routes.some(route => {
        const { fetchData: fetchMethod } = route;
        const match = matchPath<{ slug: string }>(
            url.parse(location).pathname,
            route
        );

        if (match && fetchMethod) {
            dataRequirements.push(
                fetchMethod({
                    dispatch: store.dispatch,
                    match,
                })
            );
        }

        return Boolean(match);
    });

    // When all async actions will be finished,
    // dispatch action END to close saga
    return Promise.all(dataRequirements)
        .then(() => store.close())
        .catch(err => {
            throw err;
        });
};

function getHtml(
    reactHtml: string,
    reduxState = {},
    helmetData: HelmetData,
    chunkExtractor: ChunkExtractor
) {
    const scriptTags = chunkExtractor.getScriptTags();
    const linkTags = chunkExtractor.getLinkTags();
    const styleTags = chunkExtractor.getStyleTags();

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            ${linkTags}
            ${styleTags}
        </head>
        <body>
            <div id="mount">${reactHtml}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
            </script>
            ${scriptTags}
        </body>
        </html>
    `;
}
