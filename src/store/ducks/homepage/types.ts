import { Sneakers, ReduxAction } from 'types';

// types
export const FETCH_HOMEPAGE = '@@homepage/FETCH_HOMEPAGE';
export const FETCH_HOMEPAGE_SUCCESS = '@@homepage/FETCH_HOMEPAGE_SUCCESS';
export const FETCH_HOMEPAGE_FAILURE = '@@homepage/FETCH_HOMEPAGE_FAILURE';

// action types
export type FetchHomepageAction = ReduxAction<typeof FETCH_HOMEPAGE>;
export type FetchHomepageSuccessAction = ReduxAction<
    typeof FETCH_HOMEPAGE_SUCCESS,
    { popular: Sneakers[]; newest: Sneakers[] }
>;
export type FetchHomepageFailureAction = ReduxAction<
    typeof FETCH_HOMEPAGE_FAILURE,
    string
>;

export type HomepageActionTypes =
    | FetchHomepageAction
    | FetchHomepageSuccessAction
    | FetchHomepageFailureAction;
