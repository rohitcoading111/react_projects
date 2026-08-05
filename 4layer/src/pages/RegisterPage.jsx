import React from "react";
import { useAuth } from "../hooks/authHooks";
const RegisterPage = () => {
   let {navigate, register, handleSubmit, errors,registerForm} = useAuth();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Create Account 🚀
          </h1>
          <p className="text-gray-200 mt-2">
            Join us and start your journey today
          </p>
        </div>
        <form onSubmit={handleSubmit(registerForm)} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Full Name
            </label>

            <input
              {...register("Name", { required: "Full name is required" })}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
            />
            <p className="text-red-500 text-sm mt-1">
               {errors.Name && <p className="text-red-500 text-sm mt-1"> {errors.Name.message} </p> } 
            
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email
            </label>

            <input
             {...register("Email", {required: "Email is required"})}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
            />
             {errors.Email && <p className="text-red-500 text-sm mt-1"> {errors.Email.message} </p> } 
            
            
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Password
            </label>

            <input
              {...register("Password", {required: "Password is required", minLength: {value: 6, message: "Password must be at least 6 characters"}})}
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
            />
            {errors.Password && <p className="text-red-500 text-sm mt-1"> {errors.Password.message} </p> }
          </div>
          <label className="flex items-center gap-2 text-sm text-white">
            <input type="checkbox" />
            I agree to the Terms & Conditions
          </label>
          <button
            className="w-full bg-white text-indigo-700 font-semibold py-3 rounded-xl hover:bg-gray-100 transition cursor-pointer"
          >
            Create Account
          </button>
        </form>
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="px-4 text-gray-200 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>
        <p className="text-center text-gray-200 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")} 
          className="font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;