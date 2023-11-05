import {all, fork} from 'redux-saga/effects';

import templateSaga from './template/saga';
import productsSaga from './product/saga';

export default function* rootSaga() {
  yield all([fork(templateSaga), fork(productsSaga)]);
}
