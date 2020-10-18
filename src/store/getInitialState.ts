import { RouterState } from 'connected-react-router';
import { State } from 'types';
import { initialState as homepage } from './ducks/homepage/reducer';
import { initialState as catalog } from './ducks/catalog/reducer';
import { initialState as shoes } from './ducks/shoes/reducer';

export const getInitialState = (pathname: string = '/'): State => {
    return {
        homepage,
        catalog,
        shoes,
        router: {
            location: { pathname, search: '', hash: '', key: '' },
            action: 'POP',
        } as RouterState,
    };
};
