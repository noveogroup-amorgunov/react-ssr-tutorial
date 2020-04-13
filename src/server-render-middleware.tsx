import * as url from 'url';
import * as path from 'path';
import * as React from 'react';
import { StaticRouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet, { HelmetData } from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';
import { Request, Response } from 'express';

import routes from './routes';
import { App } from './components/App/App';
import { configureStore } from './store/rootStore';
import rootSaga from './store/rootSaga';

export default (req: Request, res: Response) => {
    const location = req.url;
    const context: StaticRouterContext = {};

    const { store } = configureStore({}, location);

    // Run saga
    store
        .runSaga(rootSaga)
        .toPromise()
        .then(() => {
            const statsFile = path.resolve('./dist/loadable-stats.json');
            const extractor = new ChunkExtractor({ statsFile });

            const jsx = extractor.collectChunks(
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

            res
                // @ts-ignore
                .status(context.status || 200)
                .send(
                    htmlTemplate(reactHtml, reduxState, helmetData, extractor)
                );
        })
        .catch(err => {
            console.error(err);
            throw err;
        });

    const dataRequirements: any[] = [];

    /**
     * Call the fetchData method on the component-page
     * that corresponds to the current url (by router).
     *
     * We use `some` method to simulate working of the routes in react-router-dom
     * inside the Switch — selects the first found route.
     */
    routes.some(route => {
        const match = matchPath<{ slug: string }>(
            url.parse(location).pathname,
            route
        );
        const { fetchData: fetchMethod } = route;

        if (!match) {
            return false;
        }

        if (fetchMethod) {
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
    // display action for close sage
    return Promise.all(dataRequirements)
        .then(() => store.close())
        .catch(err => {
            console.error(err);
            throw err;
        });
};

function htmlTemplate(
    reactHtml: string,
    reduxState = {},
    helmetData: HelmetData,
    extractor: ChunkExtractor
) {
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
            <div id="mount">${reactHtml}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
            </script>
            ${scriptTags}
        </body>
        </html>
    `;
}
