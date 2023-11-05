import {createSelector} from 'reselect';
import {RootState} from '..';

const getProductState = ({product}: RootState) => product;

export const productSelector = createSelector(
  [getProductState],
  product => product,
);
