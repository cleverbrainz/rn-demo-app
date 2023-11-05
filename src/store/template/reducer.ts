import {handleActions} from 'redux-actions';
import produce from 'immer';

import * as actions from './actions';

export interface TemplateState {
  template: boolean;
}

const initialState: TemplateState = {
  template: true,
};

const reducer = handleActions<TemplateState, any>(
  {
    [actions.TEMPLATE_ACTION]: (state, {payload}) =>
      produce(state, draft => {
        draft.template = payload;
      }),
  },
  initialState,
);

export default reducer;
