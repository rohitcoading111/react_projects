import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
});

export default filterSlice.reducer;