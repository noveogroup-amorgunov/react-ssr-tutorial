import {
    CatalogActionTypes,
    FETCH_CATALOG,
    FETCH_CATALOG_FAILURE,
    FETCH_CATALOG_SUCCESS,
} from './types';
import { Sneakers } from 'types';
import produce, { Draft } from 'immer';

export interface CatalogState {
    readonly data: Sneakers[];
    readonly isLoading: boolean;
    readonly error?: string;
}

export const initialState: CatalogState = {
    data: [],
    isLoading: false,
    error: undefined,
};

export default produce(
    (draft: Draft<CatalogState> = initialState, action: CatalogActionTypes) => {
        switch (action.type) {
            case FETCH_CATALOG:
                draft.isLoading = true;
                draft.error = undefined;
                return;
            case FETCH_CATALOG_SUCCESS:
                draft.data = action.payload;
                draft.isLoading = false;
                draft.error = undefined;
                return;
            case FETCH_CATALOG_FAILURE:
                draft.data = initialState.data;
                draft.isLoading = false;
                draft.error = action.payload;
                return;
        }
        return draft;
    }
);
