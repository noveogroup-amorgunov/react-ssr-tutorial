import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import homepage from './ducks/homepage/reducer';
import catalog from './ducks/catalog/reducer';
import shoes from './ducks/shoes/reducer';
import { State } from 'types';

export default (history: History) =>
    combineReducers<State>({
        homepage,
        catalog,
        shoes,
        router: connectRouter(history),
    });
