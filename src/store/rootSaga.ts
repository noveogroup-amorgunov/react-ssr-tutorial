import { fork, all } from 'redux-saga/effects';

import { catalogSaga } from './ducks/catalog/saga';
import { shoesSaga } from './ducks/shoes/saga';
import { homepageSaga } from './ducks/homepage/saga';
import { routerSaga } from './ducks/router/saga';

export default function* rootSaga() {
    yield all([
        fork(homepageSaga),
        fork(routerSaga),
        fork(catalogSaga),
        fork(shoesSaga),
    ]);
}
