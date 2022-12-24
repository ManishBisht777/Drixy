import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "./componentSlice";

export const store = configureStore({
  reducer: { component: componentSlice },
});
