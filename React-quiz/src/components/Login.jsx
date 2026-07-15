import React from 'react'
import { useState } from 'react';
const Login = ({setIsLogin}) => {
const [formData, setFormData] = useState({
     email : "",
     password : "",
});

const handleChange = (e) => {
setFormData((prev) => ({
  ...prev,
  [e.target.name]: e.target.value,
}));
};

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-100 px-4">

    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-slate-800">
            Welcome Back 👋
        </h2>

        <p className="text-center text-slate-500 mt-2">
            Login to continue your quiz journey
        </p>

        <form onSubmit={handleChange} className="mt-8 space-y-5">

            <div>
                <label
                    className="block text-sm font-medium mb-2">
                    Email
                </label>

                <input
                    required
                    name='email'
                    type="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">
                    Password
                </label>

                <input
                    required
                    value={formData.password}
                    name='password'
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
                Login
            </button>

        </form>

        <p className="text-center mt-6 text-sm">

            Don't have an account?

            <button onClick={()=>{
              return setIsLogin(false)
            }} className="text-blue-600 font-semibold ml-2">
                Register
            </button>

        </p>

    </div>

</div>
  )
}

export default Login
