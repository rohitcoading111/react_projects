import { useNavigate } from "react-router-dom";
import  {set, useForm} from 'react-hook-form'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";

export const useAuth = () =>{
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const [registeredUsers, setregisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers"))||[])
    
    let {register,handleSubmit,reset,formState:{errors}} = useForm();

    const registerForm = (data)=> {
     let arr = [...registeredUsers,data]
      setregisteredUsers(arr)
      localStorage.setItem("registeredUsers",JSON.stringify(arr));
      toast.success("user registered successfully")
      reset();
    } 

    const loginForm = (data)=> {
        let user =registeredUsers.find((val)=>{
            return val.email === data.email && val.password === data.password;
        })
        if(!user){
         toast.error("invalid login")
         return
        }
         
         dispatch(addUser(user));
         toast.success("user logged in")
         reset();
        

    }

    return {navigate, register, handleSubmit, reset, errors, registerForm, loginForm}
} 