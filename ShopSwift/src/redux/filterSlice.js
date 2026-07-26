import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "all",
  sort: "default",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const {
  setSearch,
  setCategory,
  setSort,
} = filterSlice.actions;

export default filterSlice.reducer;