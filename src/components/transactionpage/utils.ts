import type { TransactionCategoryType } from '@/types';

import { CATEGORIES } from '@/constants/transaction';

export const getChipColor = (category: string) => {
  if (Object.hasOwn(CATEGORIES, category)) {
    return CATEGORIES[category as TransactionCategoryType].color;
  }
  return '#fff';
};
