import { takeEvery, call } from 'redux-saga/effects';

import * as types from './types';

export function* changeLocation() {
    // После смены страницы скролим вверх
    // eslint-disable-next-line  no-undef
    yield call(window.scrollTo.bind(window), 0, 0);
}

export default function* routerSaga() {
    yield takeEvery(types.LOCATION_CHANGE, changeLocation);
}
