import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "./componentSlice";
import AuthSlice from "./AuthSlice";

export const store = configureStore({
  reducer: { component: componentSlice, auth: AuthSlice },
});
