import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import type { TransactionFilters } from '@/services/apiService/transactionsApi';
import type { Transaction } from '@/types';

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
  const queryClient = useQueryClient();
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
    },
  });
};

export const useUpdateTransaction = () => {
  const queryClient = useQueryClient();
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
    },
  });
};

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
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
    },
  });
};
