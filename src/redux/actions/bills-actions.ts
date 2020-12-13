import { Dispatch } from 'redux';
import { billsApi } from '../../api/bills-api';
import {
  Bill,
  FetchBillFailureAction,
  FetchBillsLoadingAction,
  FetchBillSuccessAction,
  FETCH_BILLS_FAILURE,
  FETCH_BILLS_LOADING,
  FETCH_BILLS_SUCCESS,
} from '../../types/bill-types';

export const fetchBillsLoading = (): FetchBillsLoadingAction => ({
  type: FETCH_BILLS_LOADING,
});

export const fetchBillsSuccess = (bills: Bill[]): FetchBillSuccessAction => ({
  type: FETCH_BILLS_SUCCESS,
  payload: {
    items: bills,
  },
});

export const fetchBillsFailure = (
  errorMessage: string
): FetchBillFailureAction => ({
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
