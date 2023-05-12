import { appSlice } from "@/features/app/store/app.slice";
import { configureStore } from "@reduxjs/toolkit";

export const rootStore = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
