import { Sneakers } from 'types';
import * as types from './types';

// action creators
export function fetchCatalog(): types.FetchCatalogAction {
    return { type: types.FETCH_CATALOG };
}

export function fetchCatalogSuccess(
    data: Sneakers[]
): types.FetchCatalogSuccessAction {
    return { type: types.FETCH_CATALOG_SUCCESS, payload: data };
}

export function fetchCatalogError(
    error: string
): types.FetchCatalogFailureAction {
    return { type: types.FETCH_CATALOG_FAILURE, payload: error };
}
