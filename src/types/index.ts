import type { CATEGORIES } from '@/constants/transaction';

export type SummaryDataType = {
  totalExpense: number;
  totalIncome: number;
};

export type TransactionType = 'expense' | 'income';

export type TransactionCategoryType = keyof typeof CATEGORIES;

export type Transaction = {
  id: string;
  amount: number;
  category: string;
  type: string;
  date: string;
  description?: string;
};
