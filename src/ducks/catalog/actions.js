import * as types from './types';

export const fetchCatalog = () => ({ type: types.FETCH_CATALOG });
export const fetchCatalogSuccess = data => ({ type: types.FETCH_CATALOG_SUCCESS, payload: data });
export const fetchCatalogError = error => ({ type: types.FETCH_CATALOG_ERROR, payload: error });
