import { put, takeLatest, call } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from './types';
import * as service from './service';

function* fetchHomepage() {
    try {
        const data = yield call(service.fetchHomepage);

        yield put(actions.fetchHomepageSuccess(data));
    } catch (error) {
        yield put(actions.fetchHomepageError(error.message));
    }
}

export function* homepageSaga() {
    yield takeLatest(types.FETCH_HOMEPAGE, fetchHomepage);
}
