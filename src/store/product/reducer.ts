import {handleActions} from 'redux-actions';
import produce from 'immer';

import * as actions from './actions';
import {FAIL, START, SUCCESS} from '../common';

export interface ProductState {
  items: Array<any>;
  perPage: number;
  loading: boolean;
  success: boolean;
  error: any;
}

const initialState: ProductState = {
  items: [],
  perPage: 20,
  loading: false,
  success: false,
  error: null,
};

const reducer = handleActions<ProductState, any>(
  {
    [actions.FETCH_PRODUCTS + START]: state =>
      produce(state, draft => {
        draft.loading = true;
        draft.success = false;
        draft.error = null;
      }),
    [actions.FETCH_PRODUCTS + SUCCESS]: (state, {payload}) =>
      produce(state, draft => {
        draft.items = payload.items;
        draft.loading = false;
        draft.success = true;
        draft.error = null;
      }),
    [actions.FETCH_PRODUCTS + FAIL]: (state, {payload}) =>
      produce(state, draft => {
        draft.loading = false;
        draft.success = false;
        draft.error = payload;
      }),
  },
  initialState,
);

export default reducer;
