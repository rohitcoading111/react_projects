import { useNavigate } from "react-router-dom";
import  {useForm} from 'react-hook-form'

export const useAuth = () =>{
    let navigate = useNavigate();
    
    let {register,handleSubmit,reset,formState:{errors}} = useForm();

    const registerForm = (data)=> {

    }

    const loginForm = (data)=> {}
    
    return {navigate, register, handleSubmit, reset, errors, registerForm, loginForm}
}