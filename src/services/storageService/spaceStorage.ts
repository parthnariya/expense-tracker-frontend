import { STORAGE_KEYS } from './index';

export const storageUtils = {
  getSpaceId: (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.SPACE_ID);
  },

  setSpaceId: (spaceId: string): void => {
    localStorage.setItem(STORAGE_KEYS.SPACE_ID, spaceId);
  },

  removeSpaceId: (): void => {
    localStorage.removeItem(STORAGE_KEYS.SPACE_ID);
  },
};
