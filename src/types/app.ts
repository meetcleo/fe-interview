import { BillActions, BillsState } from './bill-types';

export interface AppState {
  bills: BillsState;
}

export type AppActions = BillActions;
