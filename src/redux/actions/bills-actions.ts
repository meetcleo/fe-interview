import { Dispatch } from 'redux';
import { billsApi } from '../../api/bills-api';
import {
  Bill,
  FetchBillsFailureAction,
  FetchBillsLoadingAction,
  FetchBillsSuccessAction,
  FETCH_BILLS_FAILURE,
  FETCH_BILLS_LOADING,
  FETCH_BILLS_SUCCESS,
  UpdateBillFailureAction,
  UpdateBillLoadingAction,
  UpdateBillSuccessAction,
  UPDATE_BILL_FAILURE,
  UPDATE_BILL_LOADING,
  UPDATE_BILL_SUCCESS,
} from '../../types/bill-types';

export const fetchBillsLoading = (): FetchBillsLoadingAction => ({
  type: FETCH_BILLS_LOADING,
});

export const fetchBillsSuccess = (bills: Bill[]): FetchBillsSuccessAction => ({
  type: FETCH_BILLS_SUCCESS,
  payload: {
    items: bills,
  },
});

export const fetchBillsFailure = (
  errorMessage: string
): FetchBillsFailureAction => ({
  type: FETCH_BILLS_FAILURE,
  payload: {
    error: errorMessage,
  },
});

export const fetchBills = () => async (dispatch: Dispatch) => {
  dispatch(fetchBillsLoading());

  try {
    const response = await billsApi.getBills();

    dispatch(fetchBillsSuccess(response));
  } catch (err) {
    dispatch(fetchBillsFailure(err.message));
  }
};

export const updateBillLoading = (): UpdateBillLoadingAction => ({
  type: UPDATE_BILL_LOADING,
});

export const updateBillSuccess = (bill: Bill): UpdateBillSuccessAction => ({
  type: UPDATE_BILL_SUCCESS,
  payload: {
    item: bill,
  },
});

export const updateBillFailure = (
  errorMessage: string
): UpdateBillFailureAction => ({
  type: UPDATE_BILL_FAILURE,
  payload: {
    error: errorMessage,
  },
});

export const updateBill = (bill: Bill) => async (dispatch: Dispatch) => {
  dispatch(updateBillLoading());

  try {
    const response = await billsApi.updateBill(bill);

    dispatch(updateBillSuccess(response));
  } catch (err) {
    dispatch(updateBillFailure(err.message));
  }
};
