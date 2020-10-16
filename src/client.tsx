import * as React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import 'babel-polyfill';

import { App } from 'components';
import { configureStore } from './store/rootStore';

const { store, history } = configureStore();

// global redeclared types
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

render(
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </ReduxProvider>,
    document.getElementById('mount')
);
