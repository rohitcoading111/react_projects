import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";


export let loginEmployee = createAsyncThunk("auth/login", 
   async (credentials,thunkApi) =>{
      try {
        let response = await axiosInstance.post("/auth/login",credentials)
        console.log(response)
        return response.data.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error)
      }
   } 
);

export let currentLoggedInEmployee = createAsyncThunk("auth/me", async (_,thunkApi )=>{
       try {
        let response = await axiosInstance.get("auth/me")
        console.log(response.data.user)
        return response.data.user;
      } catch (error) {
         return thunkApi.rejectWithValue(error)
      }
});