import { Sneakers, ReduxAction } from 'types';

// types
export const FETCH_SHOES = '@@shoes/FETCH_SHOES';
export const FETCH_SHOES_SUCCESS = '@@shoes/FETCH_SHOES_SUCCESS';
export const FETCH_SHOES_FAILURE = '@@shoes/FETCH_SHOES_FAILURE';

// action types
export type FetchShoesAction = ReduxAction<typeof FETCH_SHOES, string>;
export type FetchShoesSuccessAction = ReduxAction<
    typeof FETCH_SHOES_SUCCESS,
    Sneakers
>;
export type FetchShoesFailureAction = ReduxAction<
    typeof FETCH_SHOES_FAILURE,
    string
>;

export type ShoesActionTypes =
    | FetchShoesAction
    | FetchShoesSuccessAction
    | FetchShoesFailureAction;
