import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl border border-zinc-800">

        <h1 className="text-3xl font-bold text-white text-center">
          Create Account 🚀
        </h1>

        <p className="text-zinc-400 text-center mt-2">
          Join SkyMart and start shopping today
        </p>

        <form className="mt-8">

          <div className="mb-5">
            <label className="text-zinc-300 block mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400"
            />
          </div>

          <div className="mb-5">
            <label className="text-zinc-300 block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400"
            />
          </div>

          <div className="mb-5">
            <label className="text-zinc-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400"
            />
          </div>

          <div className="mb-6">
            <label className="text-zinc-300 block mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400"
            />
          </div>

          <button
            className="w-full bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-300 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-zinc-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-lime-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Signup;