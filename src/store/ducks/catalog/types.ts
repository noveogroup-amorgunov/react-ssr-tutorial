import { Sneakers, ReduxAction } from 'types';

// types
export const FETCH_CATALOG = '@@catalog/FETCH_CATALOG';
export const FETCH_CATALOG_SUCCESS = '@@catalog/FETCH_CATALOG_SUCCESS';
export const FETCH_CATALOG_FAILURE = '@@catalog/FETCH_CATALOG_FAILURE';

// action types
export type FetchCatalogAction = ReduxAction<typeof FETCH_CATALOG>;
export type FetchCatalogSuccessAction = ReduxAction<
    typeof FETCH_CATALOG_SUCCESS,
    Sneakers[]
>;
export type FetchCatalogFailureAction = ReduxAction<
    typeof FETCH_CATALOG_FAILURE,
    string
>;

export type CatalogActionTypes =
    | FetchCatalogAction
    | FetchCatalogSuccessAction
    | FetchCatalogFailureAction;
