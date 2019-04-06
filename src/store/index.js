import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

function getComposeEnhancers() {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line  no-undef, no-underscore-dangle
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    return compose;
}

export default function configureStore(initialState = {}) {
    const history = createBrowserHistory();

    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = getComposeEnhancers();
    const middlewares = [
        routerMiddleware(history),
        sagaMiddleware
    ];

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    return { store, history };
}
