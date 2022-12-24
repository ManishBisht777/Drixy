import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbar: null,
  landing: null,
  extra: [],
  footer: null,
};

export const ComponentSlice = createSlice({
  name: "Component",
  initialState,

  reducers: {
    SetExtraComponent: (state, action) => {
      state.extra.push({
        name: action.payload.name,
        path: action.payload.path,
      });
    },
    SetNavbar: (state, action) => {
      state.navbar = action.payload;
    },
    SetLanding: (state, action) => {
      state.landing = action.payload;
    },
    SetFooter: (state, action) => {
      state.footer = action.payload;
    },
  },
});

export const { SetExtraComponent, SetNavbar, SetFooter, SetLanding } =
  ComponentSlice.actions;

export default ComponentSlice.reducer;
