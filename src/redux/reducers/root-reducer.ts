import { combineReducers } from 'redux';

import { AppState } from '../../types/app';
import { billsReducer } from './bills-reducer';

export const rootReducer = combineReducers<AppState>({
  bills: billsReducer,
});
