import { useQuery, useMutation } from '@tanstack/react-query';

import type { TransactionFilters } from '@/services/apiService/transactionsApi';
import type { Transaction } from '@/types';

import { queryClient } from '@/services/apiService/api';
import { transactionsApi } from '@/services/apiService/transactionsApi';

export const useTransactions = (
  spaceId: string,
  filters: TransactionFilters = {},
) =>
  useQuery({
    queryKey: ['transactions', spaceId, filters],
    queryFn: () => transactionsApi.getAll(spaceId, filters),
    enabled: !!spaceId,
  });

export const useTransaction = (spaceId: string, transactionId: string) =>
  useQuery({
    queryKey: ['transaction', spaceId, transactionId],
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
      queryClient.invalidateQueries({ queryKey: ['transactions', spaceId] });
      queryClient.invalidateQueries({
        queryKey: ['transactionSummary', spaceId],
      });
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
      queryClient.invalidateQueries({ queryKey: ['transactions', spaceId] });
      queryClient.invalidateQueries({
        queryKey: ['transaction', spaceId, transactionId],
      });
      queryClient.invalidateQueries({
        queryKey: ['transactionSummary', spaceId],
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
      queryClient.invalidateQueries({ queryKey: ['transactions', spaceId] });
      queryClient.invalidateQueries({
        queryKey: ['transactionSummary', spaceId],
      });
    },
  });
};

export const useTransactionSummary = (spaceId: string) =>
  useQuery({
    queryKey: ['transactionSummary', spaceId],
    queryFn: () => transactionsApi.getSummary(spaceId),
    enabled: !!spaceId,
  });
