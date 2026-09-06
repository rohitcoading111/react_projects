import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { loginEmployee } from "./authAction";

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
   extraReducers: (builder)=>{
     builder.addCase(loginEmployee.pending ,(state)=>{
          state.isLoading = true;
     }).addCase(loginEmployee.fulfilled, (state,action)=>{
           state.employee  = action.payload;
           state.isLoading = false;
     }).addCase(loginEmployee.rejected, (state)=>{
          state.isLoading = false;
   });
  }
})


export let {addEmploy,removeEmploy} = authSlice.actions;
export default authSlice.reducer;
