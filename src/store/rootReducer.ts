import {combineReducers} from 'redux';

import templateReducer from './template/reducer';
import productReducer from './product/reducer';

export default combineReducers({
  template: templateReducer,
  product: productReducer,
});
