import { useQuery, useMutation } from '@tanstack/react-query';

import type { TransactionFilters } from '@/services/apiService/transactionsApi';
import type { Transaction } from '@/types';

import { createQueryKey, INVALIDATION_PATTERNS } from '@/constants/queries';
import { queryClient } from '@/services/apiService/api';
import { transactionsApi } from '@/services/apiService/transactionsApi';

export const useTransactions = (
  spaceId: string,
  filters: TransactionFilters = {},
) =>
  useQuery({
    queryKey: createQueryKey.transactions(spaceId, filters),
    queryFn: () => transactionsApi.getAll(spaceId, filters),
    enabled: !!spaceId,
  });

export const useTransaction = (spaceId: string, transactionId: string) =>
  useQuery({
    queryKey: createQueryKey.transaction(spaceId, transactionId),
    queryFn: () => transactionsApi.getById(spaceId, transactionId),
    enabled: !!spaceId && !!transactionId,
  });

export const useCreateTransaction = () => {
  return useMutation({
    mutationFn: ({
      spaceId,
      data,
    }: {
      spaceId: string;
      data: Partial<Transaction>;
    }) => transactionsApi.create(spaceId, data),
    onSuccess: (_, { spaceId }) => {
      INVALIDATION_PATTERNS.ALL_TRANSACTION_QUERIES(spaceId).forEach(
        (queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        },
      );
    },
  });
};

export const useUpdateTransaction = () => {
  return useMutation({
    mutationFn: ({
      spaceId,
      transactionId,
      data,
    }: {
      spaceId: string;
      transactionId: string;
      data: Partial<Transaction>;
    }) => transactionsApi.update(spaceId, transactionId, data),
    onSuccess: (_, { spaceId, transactionId }) => {
      INVALIDATION_PATTERNS.TRANSACTION_AND_RELATED(
        spaceId,
        transactionId,
      ).forEach((queryKey) => {
        queryClient.invalidateQueries({ queryKey });
      });
    },
  });
};

export const useDeleteTransaction = () => {
  return useMutation({
    mutationFn: ({
      spaceId,
      transactionId,
    }: {
      spaceId: string;
      transactionId: string;
    }) => transactionsApi.delete(spaceId, transactionId),
    onSuccess: (_, { spaceId }) => {
      INVALIDATION_PATTERNS.ALL_TRANSACTION_QUERIES(spaceId).forEach(
        (queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        },
      );
    },
  });
};

export const useTransactionSummary = (spaceId: string) =>
  useQuery({
    queryKey: createQueryKey.transactionSummary(spaceId),
    queryFn: () => transactionsApi.getSummary(spaceId),
    enabled: !!spaceId,
  });

export const useCategoryAnalytics = (spaceId: string) =>
  useQuery({
    queryKey: createQueryKey.categoryAnalytics(spaceId),
    queryFn: () => transactionsApi.getCategoryAnalytics(spaceId),
    enabled: !!spaceId,
  });

export const useTrendData = (spaceId: string) =>
  useQuery({
    queryKey: createQueryKey.trendData(spaceId),
    queryFn: () => transactionsApi.getTrendData(spaceId),
    enabled: !!spaceId,
  });
