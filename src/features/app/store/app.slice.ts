import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  index: number;
}

export const initialAppState: AppState = {
  index: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setIndex: (state, { payload }: { payload: number }) => {
      state.index = payload;
    },
    changeLanguage: (state, { payload }: { payload: number }) => {
      state.index = payload;
    },
  },
});

export const { setIndex, changeLanguage } = appSlice.actions;
