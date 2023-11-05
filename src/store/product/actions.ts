import {createAction} from 'redux-actions';
import {START} from '../common';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProductsAction = createAction(FETCH_PRODUCTS + START);
