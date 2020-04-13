import { Action, Store } from 'redux';
import { SagaMiddleware } from '@redux-saga/core';
import { RouterState } from 'connected-react-router';
import { HomepageState } from 'store/ducks/homepage/reducer';
import { CatalogState } from 'store/ducks/catalog/reducer';
import { ShoesState } from 'store/ducks/shoes/reducer';

// Redux types
export interface ReduxAction<T = any, P = any> extends Action {
    type: T;
    payload?: P;
}

export type AppStore = Store & {
    runSaga: SagaMiddleware['run'];
    close: () => void;
};

export interface State {
    readonly homepage: HomepageState;
    readonly catalog: CatalogState;
    readonly shoes: ShoesState;
    readonly router: RouterState;
}
