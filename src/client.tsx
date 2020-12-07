import * as React from 'react';
import { hydrate } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import 'babel-polyfill';

import { App } from 'components';
import { State } from 'types';
import { configureStore } from './store/rootStore';

const { store, history } = configureStore(window.__INITIAL_STATE__);

// global redeclared types
declare global {
    interface Window {
        __INITIAL_STATE__: State;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

loadableReady(() => {
    hydrate(
        <ReduxProvider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </ReduxProvider>,
        document.getElementById('mount')
    );
});
