import { State } from 'types';

export function getShoes(state: State) {
    return state.shoes.data;
}

export function isLoading(state: State) {
    return state.shoes.isLoading;
}
