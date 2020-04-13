import { takeEvery, call } from 'redux-saga/effects';
import * as types from './types';

export function* changeLocation() {
    // After changing page, scroll to top
    yield call(window.scrollTo.bind(window), 0, 0);
}

export function* routerSaga() {
    yield takeEvery(types.LOCATION_CHANGE, changeLocation);
}
