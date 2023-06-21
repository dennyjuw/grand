import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { AppState } from './store';

// Type for our state
export interface PageState {
  browseDrawer: boolean;
}

// Initial state
const initialState: PageState = {
  browseDrawer: false,
};

// Actual Slice
export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    // Action to set the drawer status
    setDrawerState(state, action) {
      state.browseDrawer = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.page,
      };
    },
  },
});

export const { setDrawerState } = pageSlice.actions;

export const selectPageState = (state: AppState) => state.page.browseDrawer;

export default pageSlice.reducer;
