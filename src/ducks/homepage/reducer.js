import * as types from './types';

const initialState = {
    data: {
        popular: [],
        newest: []
    },
    isLoading: false,
    error: undefined
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case types.FETCH_HOMEPAGE:
        return fetchHomepage(state);

    case types.FETCH_HOMEPAGE_SUCCESS:
        return fetchHomepageSuccess(state, action);

    case types.FETCH_HOMEPAGE_ERROR:
        return fetchHomepageError(state, action);

    default:
        return state;
    }
}

function fetchHomepage(state) {
    return {
        ...state,
        isLoading: true,
        error: undefined
    };
}

function fetchHomepageSuccess(state, action) {
    return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: undefined
    };
}

function fetchHomepageError(state, action) {
    return {
        ...state,
        data: initialState.data,
        isLoading: false,
        error: action.payload
    };
}

export default reducer;
