import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { AppActions, AppState } from '../types/app';

type DispatchExts = ThunkDispatch<AppState, void, AppActions>;

export const mockStore = configureStore<AppState, DispatchExts>([thunk]);
