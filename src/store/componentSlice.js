import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbar: "",
  landing: "",
  extra: [],
  footer: "",
};

export const ComponentSlice = createSlice({
  name: "Component",
  initialState,

  reducers: {
    SetExtraComponent: (state, action) => {
      state.extra.push(action.payload);
    },
  },
});

export const { SetExtraComponent } = ComponentSlice.actions;

export default ComponentSlice.reducer;
