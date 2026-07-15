import React from 'react'
import { useState } from 'react'
const Register = ({setIsLogin}) => {
   
    const [formData, setformData] = useState({
    username : "",
    email : "",
    password : "",
    confirmpassword : "",

    })

const handleSubmit = (e)=>{
  e.preventDefault();
  setformData((prev)=>({
   ...prev,[e.target.name]:e.target.value
  }))
}

  return (
 <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-100 px-4">

    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-slate-800">
            Create Account 🚀
        </h2>

        <p className="text-center text-slate-500 mt-2">
            Join QuizMaster and start learning.
        </p>

        <form className="mt-8 space-y-5">

            <input
               value={formData.username}
                required
                name='username'
                type="text"
                placeholder="Username"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                required
                value={formData.email}
                name='email'
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                required
                value={formData.password}
                name='password'
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                required
                value={formData.confirmpassword}
                name='confirmpassword'
                type="password"
                placeholder="Confirm Password"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
                Register
            </button>

        </form>

        <p className="text-center mt-6 text-sm">

            Already have an account?

            <button onClick={()=>{
              setIsLogin(true)
            }} className="text-blue-600 font-semibold ml-2">
                Login
            </button>

        </p>

    </div>

</div>
  )
}

export default Register
