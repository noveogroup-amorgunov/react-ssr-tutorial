import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import 'babel-polyfill';

import App from './components/App';
import configureStore from './store/index';

// eslint-disable-next-line no-undef
const { store, history } = configureStore(window.__INITIAL_STATE__);

ReactDOM.hydrate(
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </ReduxProvider>,
    // eslint-disable-next-line no-undef
    document.getElementById('mount')
);
