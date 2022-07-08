import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/signup/signupSlice";
import { logger } from "./middleware";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
