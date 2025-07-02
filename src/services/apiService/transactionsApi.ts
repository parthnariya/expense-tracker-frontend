import { api } from './api';

import type {
  Transaction,
  ApiResponse,
  TransactionSummary,
  CategoryAnalytics,
} from '@/types';

export interface TransactionFilters {
  type?: 'income' | 'expense';
  category?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

export const transactionsApi = {
  getAll: async (
    spaceId: string,
    filters: TransactionFilters = {},
  ): Promise<ApiResponse<Transaction[]>> => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, value.toString());
      }
    });

    if (params.size > 0) {
      const response = await api.get(
        `/api/spaces/${spaceId}/transactions?${params}`,
      );
      return response.data;
    } else {
      const response = await api.get(`/api/spaces/${spaceId}/transactions`);
      return response.data;
    }
  },

  getById: async (
    spaceId: string,
    transactionId: string,
  ): Promise<ApiResponse<Transaction>> => {
    const response = await api.get(
      `/api/spaces/${spaceId}/transactions/${transactionId}`,
    );
    return response.data;
  },

  create: async (
    spaceId: string,
    data: Partial<Transaction>,
  ): Promise<ApiResponse<Transaction>> => {
    const response = await api.post(
      `/api/spaces/${spaceId}/transactions`,
      data,
    );
    return response.data;
  },

  update: async (
    spaceId: string,
    transactionId: string,
    data: Partial<Transaction>,
  ): Promise<ApiResponse<Transaction>> => {
    const response = await api.put(
      `/api/spaces/${spaceId}/transactions/${transactionId}`,
      data,
    );
    return response.data;
  },

  delete: async (
    spaceId: string,
    transactionId: string,
  ): Promise<ApiResponse<{ message: string }>> => {
    const response = await api.delete(
      `/api/spaces/${spaceId}/transactions/${transactionId}`,
    );
    return response.data;
  },

  getSummary: async (
    spaceId: string,
  ): Promise<ApiResponse<TransactionSummary>> => {
    const response = await api.get(
      `/api/spaces/${spaceId}/transactions/summary`,
    );
    return response.data;
  },

  getCategoryAnalytics: async (
    spaceId: string,
  ): Promise<ApiResponse<CategoryAnalytics>> => {
    const response = await api.get(
      `/api/spaces/${spaceId}/transactions/category-spending`,
    );
    return response.data;
  },

  getTrendData: async (
    spaceId: string,
  ): Promise<ApiResponse<Transaction[]>> => {
    const filters: TransactionFilters = {
      page: 1,
      limit: 30,
    };

    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, value.toString());
      }
    });

    const response = await api.get(
      `/api/spaces/${spaceId}/transactions?${params}`,
    );
    return response.data;
  },
};
