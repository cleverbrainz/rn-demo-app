import {createSelector} from 'reselect';
import {RootState} from '..';

const getTemplateState = ({template}: RootState) => template;

export const templateSelector = createSelector(
  [getTemplateState],
  ({template}) => template,
);
