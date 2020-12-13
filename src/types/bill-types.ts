export const FETCH_BILLS_LOADING = 'FETCH_BILLS_LOADING';
export const FETCH_BILLS_SUCCESS = 'FETCH_BILLS_SUCCESS';
export const FETCH_BILLS_FAILURE = 'FETCH_BILLS_FAILURE';

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

export interface FetchBillSuccessAction {
  type: typeof FETCH_BILLS_SUCCESS;
  payload: {
    items: Bill[];
  };
}

export interface FetchBillFailureAction {
  type: typeof FETCH_BILLS_FAILURE;
  payload: {
    error: string;
  };
}

export type BillActions =
  | FetchBillsLoadingAction
  | FetchBillSuccessAction
  | FetchBillFailureAction;
