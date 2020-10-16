import { State } from 'types';

export function getCatalog(state: State) {
    return state.catalog.data;
}

export function isLoading(state: State) {
    return state.catalog.isLoading;
}
