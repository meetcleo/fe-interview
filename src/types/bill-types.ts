export const FETCH_BILLS_LOADING = 'FETCH_BILLS_LOADING';
export const FETCH_BILLS_SUCCESS = 'FETCH_BILLS_SUCCESS';
export const FETCH_BILLS_FAILURE = 'FETCH_BILLS_FAILURE';
export const UPDATE_BILL_LOADING = 'UPDATE_BILL_LOADING';
export const UPDATE_BILL_SUCCESS = 'UPDATE_BILL_SUCCESS';
export const UPDATE_BILL_FAILURE = 'UPDATE_BILL_FAILURE';

export interface Transaction {
  amount: number;
  date: string;
  id: number;
}

export interface Bill {
  categoryId: number;
  iconUrl: string | null;
  id: string;
  isBill: boolean;
  name: string;
  transactions: Transaction[];
}

export type BillsState = {
  isFetching: boolean;
  errorMessage?: string;
  items: Bill[];
};

export interface FetchBillsLoadingAction {
  type: typeof FETCH_BILLS_LOADING;
}

export interface FetchBillsSuccessAction {
  type: typeof FETCH_BILLS_SUCCESS;
  payload: {
    items: Bill[];
  };
}

export interface FetchBillsFailureAction {
  type: typeof FETCH_BILLS_FAILURE;
  payload: {
    error: string;
  };
}

export interface UpdateBillLoadingAction {
  type: typeof UPDATE_BILL_LOADING;
}

export interface UpdateBillSuccessAction {
  type: typeof UPDATE_BILL_SUCCESS;
  payload: {
    item: Bill;
  };
}

export interface UpdateBillFailureAction {
  type: typeof UPDATE_BILL_FAILURE;
  payload: {
    error: string;
  };
}

export type BillActions =
  | FetchBillsLoadingAction
  | FetchBillsSuccessAction
  | FetchBillsFailureAction
  | UpdateBillLoadingAction
  | UpdateBillSuccessAction
  | UpdateBillFailureAction;
