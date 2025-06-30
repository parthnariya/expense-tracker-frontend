import type { RootState } from '../../index';

export const selectCurrentSpace = (state: RootState) =>
  state.spaces.currentSpace;
