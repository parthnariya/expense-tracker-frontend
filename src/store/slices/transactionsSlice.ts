import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Transaction } from '@/types';

interface TransactionsState {
  transactions: Transaction[];
}

const initialState: TransactionsState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions(state, action: PayloadAction<Transaction[]>) {
      state.transactions = action.payload;
    },
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
    updateTransaction(state, action: PayloadAction<Transaction>) {
      const idx = state.transactions.findIndex(
        (t) => t.id === action.payload.id,
      );
      if (idx !== -1) {
        state.transactions[idx] = action.payload;
      }
    },
    removeTransaction(state, action: PayloadAction<string>) {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload,
      );
    },
  },
});

export const {
  setTransactions,
  addTransaction,
  updateTransaction,
  removeTransaction,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
