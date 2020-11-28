import { createStore, compose, applyMiddleware, Store } from 'redux';
import createSagaMiddleware, { END, SagaMiddleware } from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { AppStore, State } from 'types';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

function getComposeEnhancers() {
    if (process.env.NODE_ENV !== 'production' && !isServer) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    return compose;
}

export const isServer = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export function configureStore(initialState: State, url = '/') {
    const history = isServer
        ? createMemoryHistory({ initialEntries: [url] })
        : createBrowserHistory();

    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = getComposeEnhancers();
    const middlewares = [routerMiddleware(history), sagaMiddleware];

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    ) as AppStore;

    // Add methods to use in the server
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    if (!isServer) {
        sagaMiddleware.run(rootSaga);
    }

    return { store, history };
}
