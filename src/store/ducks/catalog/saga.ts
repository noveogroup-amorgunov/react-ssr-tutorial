import { put, takeLatest, call } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from './types';
import * as service from './service';

function* fetchCatalog() {
    try {
        const data = yield call(service.fetchCatalog);

        yield put(actions.fetchCatalogSuccess(data));
    } catch (error) {
        yield put(actions.fetchCatalogError(error.message));
    }
}

export function* catalogSaga() {
    yield takeLatest(types.FETCH_CATALOG, fetchCatalog);
}
