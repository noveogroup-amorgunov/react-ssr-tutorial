import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import homepage from '../ducks/homepage/reducer';
import catalog from '../ducks/catalog/reducer';
import shoes from '../ducks/shoes/reducer';

export default history => combineReducers({
    homepage,
    catalog,
    shoes,
    router: connectRouter(history)
});
