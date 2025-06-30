import type { CATEGORIES } from '@/constants/transaction';

export type TransactionType = 'expense' | 'income';

export type TransactionCategoryType = keyof typeof CATEGORIES;

export type Transaction = {
  id: string;
  spaceId: string;
  title: string;
  description?: string;
  amount: number;
  type: 'income' | 'expense';
  category?: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};
