import { createSlice } from "@reduxjs/toolkit";

 export let themeSlice = createSlice({
    name:"theme",
    initialState:{
        mode:localStorage.getItem("theme") || "dark"
    },
   reducers:{
    toogleTheme: (state)=>{
      state.mode = state.mode === "dark" ? "light":"dark";
      localStorage.setItem("theme",state.mode)
    },
   },
});

export let {toogleTheme} = themeSlice.actions