import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import 'babel-polyfill';

import App from './components/App';
import configureStore from './store';

const app = express();

// WARNING: Only for developing.
// In production I recommend use nginx or CDN
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', (req, res) => {
    const location = req.url;
    const context = {};

    const { store } = configureStore({});

    const jsx = (
        <ReduxProvider store={store}>
            <StaticRouter context={context} location={location}>
                <App />
            </StaticRouter>
        </ReduxProvider>
    );

    const reactDom = renderToString(jsx);
    const reduxState = store.getState();

    res.send(htmlTemplate(reactDom, reduxState));
});

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

export default app;
