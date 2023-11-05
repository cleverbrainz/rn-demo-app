import {all, fork, take, put} from 'redux-saga/effects';

import {FAIL, START, SUCCESS} from '../common';
import * as actions from './actions';
import ListData from '../../utils/fake-data';

function* fetchProducts(): any {
  while (true) {
    const {payload} = yield take(actions.FETCH_PRODUCTS + START);
    try {
      const {page} = payload;
      yield put({
        type: actions.FETCH_PRODUCTS + SUCCESS,
        payload: {items: ListData.slice(0, page * 20)},
      });
    } catch (error) {
      yield put({type: actions.FETCH_PRODUCTS + FAIL, payload: error});
    }
  }
}

export default function* () {
  yield all([fork(fetchProducts)]);
}
