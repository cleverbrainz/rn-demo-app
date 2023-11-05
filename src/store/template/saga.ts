import {all, fork, take} from 'redux-saga/effects';
import * as actions from './actions';

function* template() {
  while (true) {
    yield take(actions.TEMPLATE_ACTION);
    // do api call or call redux actions, etc...
  }
}

export default function* () {
  yield all([fork(template)]);
}
