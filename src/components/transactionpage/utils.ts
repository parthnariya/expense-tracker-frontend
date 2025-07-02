import { AlertTriangle, TrendingDown, TrendingUp, Wallet } from 'lucide-react';

import type { TransactionCategoryType, TransactionType } from '@/types';

import { CATEGORIES } from '@/constants/transaction';

export const getChipColor = (category: string) => {
  if (Object.hasOwn(CATEGORIES, category)) {
    return CATEGORIES[category as TransactionCategoryType].color;
  }
  return '#fff';
};

export const getSummaryCardProps = (
  type: TransactionType | 'balance',
  amount: number,
) => {
  switch (type) {
    case 'income':
      return {
        title: 'Total Income',
        amount: amount,
        Icon: TrendingUp,
        color: '#66BB6A',
        bgColor: '#66bb6a90',
      };
    case 'expense':
      return {
        title: 'Total Expense',
        amount: amount,
        Icon: TrendingDown,
        color: '#EF5350',
        bgColor: '#EF535090',
      };
    case 'balance':
      return {
        title: 'Net Balance',
        amount: amount,
        Icon: amount >= 0 ? Wallet : AlertTriangle,
        color: amount >= 0 ? 'secondary' : 'error',
        bgColor: amount >= 0 ? '#66bb6a90' : '#EF535090',
      };
  }
};
