import { createStore, compose, applyMiddleware, Store } from 'redux';
import createSagaMiddleware, { END, SagaMiddleware } from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { AppStore } from '../types';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

function getComposeEnhancers() {
    if (process.env.NODE_ENV !== 'production') {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    return compose;
}

export function configureStore(initialState = {}, url = '/') {
    const history = createBrowserHistory();
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = getComposeEnhancers();
    const middlewares = [routerMiddleware(history), sagaMiddleware];

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    ) as AppStore;

    sagaMiddleware.run(rootSaga);

    return { store, history };
}
