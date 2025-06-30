import { configureStore } from '@reduxjs/toolkit';

import spacesReducer from './slices/spaces/spacesSlice';
import transactionsReducer from './slices/transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    spaces: spacesReducer,
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
