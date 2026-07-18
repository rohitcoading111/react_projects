import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const [formData, setFormData] = useState({
  email: "",
  password: "",
  });
const navigate = useNavigate();
const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((e) => e.email === formData.email && e.password === formData.password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl border border-zinc-800">

        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back 👋
        </h1>

        <p className="text-zinc-400 text-center mt-2">
          Login to continue shopping
        </p>

        <form onSubmit={handleSubmit} className="mt-8">

          <div className="mb-5">
            <label className="text-zinc-300 block mb-2">
              Email
            </label>

            <input
              required
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="text-zinc-300 block mb-2">
              Password
            </label>

            <input
              required
              name="password"
              value={formData.password}
              type="password"
              placeholder="Enter your password"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400"
              onChange={handleChange}
            />
          </div>

          <button
           type="submit"
            className="w-full bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-300 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-zinc-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-lime-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;