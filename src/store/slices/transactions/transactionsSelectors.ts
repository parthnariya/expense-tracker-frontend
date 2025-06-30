import type { RootState } from '../../index';

export const selectTransactions = (state: RootState) =>
  state.transactions.transactions;
