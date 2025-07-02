import type { TransactionFilters } from '@/services/apiService/transactionsApi';

export const QUERY_KEYS = {
  SPACES: {
    ALL: ['spaces'],
    BY_ID: (id: string) => ['space', id],
  },
  TRANSACTIONS: {
    ALL: (spaceId: string, filters?: TransactionFilters) => [
      'transactions',
      spaceId,
      filters,
    ],
    BY_ID: (spaceId: string, transactionId: string) => [
      'transaction',
      spaceId,
      transactionId,
    ],
    SUMMARY: (spaceId: string) => ['transactionSummary', spaceId],
    CATEGORY_ANALYTICS: (spaceId: string) => ['categoryAnalytics', spaceId],
    TREND_DATA: (spaceId: string) => ['trendData', spaceId],
  },
} as const;

export const createQueryKey = {
  space: (id: string) => QUERY_KEYS.SPACES.BY_ID(id),

  transactions: (spaceId: string, filters?: TransactionFilters) =>
    QUERY_KEYS.TRANSACTIONS.ALL(spaceId, filters),
  transaction: (spaceId: string, transactionId: string) =>
    QUERY_KEYS.TRANSACTIONS.BY_ID(spaceId, transactionId),
  transactionSummary: (spaceId: string) =>
    QUERY_KEYS.TRANSACTIONS.SUMMARY(spaceId),
  categoryAnalytics: (spaceId: string) =>
    QUERY_KEYS.TRANSACTIONS.CATEGORY_ANALYTICS(spaceId),
  trendData: (spaceId: string) => QUERY_KEYS.TRANSACTIONS.TREND_DATA(spaceId),
} as const;

export const INVALIDATION_PATTERNS = {
  ALL_TRANSACTION_QUERIES: (spaceId: string) => [
    QUERY_KEYS.TRANSACTIONS.ALL(spaceId),
    QUERY_KEYS.TRANSACTIONS.SUMMARY(spaceId),
    QUERY_KEYS.TRANSACTIONS.CATEGORY_ANALYTICS(spaceId),
    QUERY_KEYS.TRANSACTIONS.TREND_DATA(spaceId),
  ],

  TRANSACTION_AND_RELATED: (spaceId: string, transactionId: string) => [
    QUERY_KEYS.TRANSACTIONS.ALL(spaceId),
    QUERY_KEYS.TRANSACTIONS.BY_ID(spaceId, transactionId),
    QUERY_KEYS.TRANSACTIONS.SUMMARY(spaceId),
    QUERY_KEYS.TRANSACTIONS.CATEGORY_ANALYTICS(spaceId),
    QUERY_KEYS.TRANSACTIONS.TREND_DATA(spaceId),
  ],
} as const;

export enum QUERIES {
  SPACE = 'space',
  TRANSACTIONS = 'transactions',
  TRANSACTION = 'transaction',
  TRANSACTION_SUMMARY = 'transactionSummary',
  CATEGORY_ANALYTICS = 'categoryAnalytics',
  TREND_DATA = 'trendData',
}
