import { AppActions } from '../../types/app';
import {
  BillsState,
  FETCH_BILLS_FAILURE,
  FETCH_BILLS_LOADING,
  FETCH_BILLS_SUCCESS,
} from '../../types/bill-types';

const billsInitialState: BillsState = {
  items: [],
  isFetching: false,
  errorMessage: undefined,
};

export const billsReducer = (state = billsInitialState, action: AppActions) => {
  switch (action.type) {
    case FETCH_BILLS_LOADING:
      return { ...state, isFetching: true };
    case FETCH_BILLS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.error,
      };
    case FETCH_BILLS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: undefined,
        items: action.payload.items,
      };
    default:
      return state;
  }
};
