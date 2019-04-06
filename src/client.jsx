import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import 'babel-polyfill';

import App from './components/App';
import configureStore from './store/index';

const { store, history } = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </ReduxProvider>,
    // eslint-disable-next-line no-undef
    document.getElementById('mount')
);
