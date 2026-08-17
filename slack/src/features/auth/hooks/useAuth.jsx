import { useState } from "react";
import { useForm } from "react-hook-form";
import  { useNavigate } from "react-router"


const useAuth = () => {

    let navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const registerPassword = watch("registerPassword", "");

  const passwordStrength = [
    registerPassword.length >= 8,
    /[A-Z]/.test(registerPassword),
    /[0-9]/.test(registerPassword),
    /[^A-Za-z0-9]/.test(registerPassword),
  ].filter(Boolean).length;

  const toggleLoginPassword = () => {
    setShowLoginPassword((prev) => !prev);
  };

  const toggleRegisterPassword = () => {
    setShowRegisterPassword((prev) => !prev);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onRegisterSubmit = async (data) => {
    try {
      setIsRegisterLoading(true);
      console.log("Register Data:", data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsRegisterLoading(false);
    }
  };

  const onLoginSubmit = async (data) => {
    try {
      setIsLoginLoading(true);
      console.log("Login Data:", data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoginLoading(false);
    }
  };

  const resetAuthForm = () => {
    reset();
    setShowLoginPassword(false);
    setShowRegisterPassword(false);
    setShowConfirmPassword(false);
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    reset,
    navigate,

    onRegisterSubmit,
    onLoginSubmit,

    showLoginPassword,
    toggleLoginPassword,

    showRegisterPassword,
    toggleRegisterPassword,

    showConfirmPassword,
    toggleConfirmPassword,

    registerPassword,
    passwordStrength,

    isLoginLoading,
    isRegisterLoading,

    resetAuthForm,
  };
};

export default useAuth;