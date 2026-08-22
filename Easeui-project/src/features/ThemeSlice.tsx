import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemeState = {
  mode: "light" | "dark";
};

const initialState: ThemeState = {
  mode: "light",
};

const applyTheme = (mode: "light" | "dark") => {
  document.documentElement.classList.toggle(
    "dark",
    mode === "dark"
  );

  document.documentElement.setAttribute(
    "data-theme",
    mode
  );
};

const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggleTheme: (state) => {
      state.mode =
        state.mode === "light" ? "dark" : "light";

      localStorage.setItem("theme", state.mode);

      applyTheme(state.mode);
    },

    setTheme: (
      state,
      action: PayloadAction<"light" | "dark">
    ) => {
      state.mode = action.payload;

      localStorage.setItem("theme", state.mode);

      applyTheme(state.mode);
    },
  },
});

export const { toggleTheme, setTheme } =
  themeSlice.actions;

export default themeSlice.reducer;