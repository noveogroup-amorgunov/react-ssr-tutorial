import { State } from 'types';

export function getCurrentPathname(state: State) {
    return state.router.location.pathname;
}
