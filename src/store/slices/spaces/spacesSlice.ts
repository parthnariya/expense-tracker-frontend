import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Space } from '@/types';

interface SpacesState {
  currentSpace: Space | null;
}

const initialState: SpacesState = {
  currentSpace: null,
};

const spacesSlice = createSlice({
  name: 'spaces',
  initialState,
  reducers: {
    setCurrentSpace(state, action: PayloadAction<Space | null>) {
      state.currentSpace = action.payload;
    },
  },
});

export const { setCurrentSpace } = spacesSlice.actions;
export default spacesSlice.reducer;
