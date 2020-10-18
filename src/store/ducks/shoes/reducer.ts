import {
    ShoesActionTypes,
    FETCH_SHOES,
    FETCH_SHOES_FAILURE,
    FETCH_SHOES_SUCCESS,
} from './types';
import { Sneakers } from 'types';
import produce, { Draft } from 'immer';

export interface ShoesState {
    readonly data?: Sneakers;
    readonly isLoading: boolean;
    readonly error?: string;
}

export const initialState: ShoesState = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export default produce(
    (draft: Draft<ShoesState> = initialState, action: ShoesActionTypes) => {
        switch (action.type) {
            case FETCH_SHOES:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_SHOES_SUCCESS:
                draft.data = action.payload;
                draft.isLoading = false;
                draft.error = undefined;
                return;
            case FETCH_SHOES_FAILURE:
                draft.data = initialState.data;
                draft.isLoading = false;
                draft.error = action.payload;
                return;
        }
        return draft;
    }
);
