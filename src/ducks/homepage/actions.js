import * as types from './types';

export const fetchHomepage = () => ({ type: types.FETCH_HOMEPAGE });
export const fetchHomepageSuccess = data => ({ type: types.FETCH_HOMEPAGE_SUCCESS, payload: data });
export const fetchHomepageError = error => ({ type: types.FETCH_HOMEPAGE_ERROR, payload: error });
