import * as types from './types';

const initialState = {
    data: [],
    isLoading: false,
    error: undefined
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case types.FETCH_CATALOG:
        return fetchCatalog(state);

    case types.FETCH_CATALOG_SUCCESS:
        return fetchCatalogSuccess(state, action);

    case types.FETCH_CATALOG_ERROR:
        return fetchCatalogError(state, action);

    default:
        return state;
    }
}

function fetchCatalog(state) {
    return {
        ...state,
        isLoading: true,
        error: undefined
    };
}

function fetchCatalogSuccess(state, action) {
    return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: undefined
    };
}

function fetchCatalogError(state, action) {
    return {
        ...state,
        data: initialState.data,
        isLoading: false,
        error: action.payload
    };
}

export default reducer;
