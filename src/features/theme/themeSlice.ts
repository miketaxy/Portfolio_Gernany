import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: string;
}

function loadInitialState(): string | null {
  const theme = localStorage.getItem("theme");
  return theme;
}

const initialState: ThemeState = (() => {
  const data = loadInitialState();
  if (data === "light" || data === "dark") {
    return {
      value: data,
    };
  }
  return {
    value: "light",
  };
})();

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.value === "light") {
        state.value = "dark";
      } else {
        state.value = "light";
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
