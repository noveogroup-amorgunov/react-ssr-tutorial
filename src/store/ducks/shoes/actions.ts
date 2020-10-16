import { Sneakers } from 'types';
import * as types from './types';

// action creators
export function fetchShoes(slug: string): types.FetchShoesAction {
    return { type: types.FETCH_SHOES, payload: slug };
}

export function fetchShoesSuccess(
    data: Sneakers
): types.FetchShoesSuccessAction {
    return { type: types.FETCH_SHOES_SUCCESS, payload: data };
}

export function fetchShoesError(error: string): types.FetchShoesFailureAction {
    return { type: types.FETCH_SHOES_FAILURE, payload: error };
}
