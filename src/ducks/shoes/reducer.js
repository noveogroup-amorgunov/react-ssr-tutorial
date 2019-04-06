import * as types from './types';

const initialState = {
    data: {},
    isLoading: false,
    error: undefined
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case types.FETCH_SHOES:
        return fetchShoes(state);

    case types.FETCH_SHOES_SUCCESS:
        return fetchShoesSuccess(state, action);

    case types.FETCH_SHOES_ERROR:
        return fetchShoesError(state, action);

    default:
        return state;
    }
}

function fetchShoes(state) {
    return {
        ...state,
        isLoading: true,
        error: undefined
    };
}

function fetchShoesSuccess(state, action) {
    return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: undefined
    };
}

function fetchShoesError(state, action) {
    return {
        ...state,
        data: initialState.data,
        isLoading: false,
        error: action.payload
    };
}

export default reducer;
