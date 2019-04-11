import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';

import App from './components/App';
import configureStore from './store';

export default (req, res) => {
    const location = req.url;
    const context = {};

    const { store } = configureStore({}, location);

    const jsx = (
        <ReduxProvider store={store}>
            <StaticRouter context={context} location={location}>
                <App />
            </StaticRouter>
        </ReduxProvider>
    );

    const reactDom = renderToString(jsx);
    const reduxState = store.getState();

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    res
        .status(context.status || 200)
        .send(htmlTemplate(reactDom, reduxState));
};

function htmlTemplate(reactDom, reduxState = {}) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>REACT SNICKERS</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="/main.css" rel="stylesheet"></head>
        </head>
        <body>
            <div id="mount">${reactDom}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
            </script>
            <script src="/main.js"></script>
        </body>
        </html>
    `;
}
