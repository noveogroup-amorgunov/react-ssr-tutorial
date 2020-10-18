import {
    HomepageActionTypes,
    FETCH_HOMEPAGE,
    FETCH_HOMEPAGE_FAILURE,
    FETCH_HOMEPAGE_SUCCESS,
} from './types';
import { Sneakers } from 'types';
import produce, { Draft } from 'immer';

export interface HomepageState {
    readonly data: {
        popular: Sneakers[];
        newest: Sneakers[];
    };
    readonly isLoading: boolean;
    readonly error?: string;
}

export const initialState: HomepageState = {
    data: {
        popular: [],
        newest: [],
    },
    isLoading: false,
    error: undefined,
};

export default produce(
    (
        draft: Draft<HomepageState> = initialState,
        action: HomepageActionTypes
    ) => {
        switch (action.type) {
            case FETCH_HOMEPAGE:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_HOMEPAGE_SUCCESS:
                draft.data = action.payload;
                draft.isLoading = false;
                draft.error = undefined;
                return;
            case FETCH_HOMEPAGE_FAILURE:
                draft.data = initialState.data;
                draft.isLoading = false;
                draft.error = action.payload;
                return;
        }
        return draft;
    }
);
