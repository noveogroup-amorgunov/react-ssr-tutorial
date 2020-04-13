import { put, takeLatest, call } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from './types';
import * as service from './service';

function* fetchShoes(action: types.FetchShoesAction) {
    try {
        const slug = action.payload;
        const data = yield call(service.fetchShoes, slug);

        yield put(actions.fetchShoesSuccess(data));
    } catch (error) {
        yield put(actions.fetchShoesError(error.message));
    }
}

export function* shoesSaga() {
    yield takeLatest(types.FETCH_SHOES, fetchShoes);
}
