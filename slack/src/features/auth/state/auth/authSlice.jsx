import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

let authSlice = createSlice({
    name:"auth",
    initialState:{
        employee:null,
        isLoading:false,
    },
    reducers:{
        addEmploy:(state,action)=>{
           state.employee = action.payload;
           state.isLoading = false;
        }
    },
    removeEmploy: (state)=>{
       state.employee = null;
       state.isLoading = false;
    },
})


export let {addEmploy,removeEmploy} = authSlice.actions;
export default authSlice.reducer;
