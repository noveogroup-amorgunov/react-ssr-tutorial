import * as types from './types';

export const fetchShoes = slug => ({ type: types.FETCH_SHOES, payload: { slug } });
export const fetchShoesSuccess = data => ({ type: types.FETCH_SHOES_SUCCESS, payload: data });
export const fetchShoesError = error => ({ type: types.FETCH_SHOES_ERROR, payload: error });
