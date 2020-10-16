import { Sneakers } from 'types';
import * as types from './types';

// action creators
export function fetchHomepage(): types.FetchHomepageAction {
    return { type: types.FETCH_HOMEPAGE };
}

export function fetchHomepageSuccess(data: {
    popular: Sneakers[];
    newest: Sneakers[];
}): types.FetchHomepageSuccessAction {
    return { type: types.FETCH_HOMEPAGE_SUCCESS, payload: data };
}

export function fetchHomepageError(
    error: string
): types.FetchHomepageFailureAction {
    return { type: types.FETCH_HOMEPAGE_FAILURE, payload: error };
}
