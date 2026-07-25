import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";

const Login = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-100 flex items-center justify-center px-6 py-10">

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        <div className="hidden lg:flex flex-col justify-center bg-violet-600 text-white p-16">

          <h1 className="text-5xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-6 text-lg leading-8 text-violet-100">
            Login to continue shopping with ShopSwift.
            Discover thousands of premium products
            with the best deals every day.
          </p>

        </div>


        <div className="p-12">

          <h2 className="text-4xl font-bold">
            Login
          </h2>

          <p className="text-gray-500 mt-3">
            Enter your credentials to continue.
          </p>


          <div className="mt-8">

            <label className="font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
            />

          </div>


          <div className="mt-6">

            <label className="font-medium">
              Password
            </label>

            <div className="relative">

              <input
                type="password"
                placeholder="Enter password"
                className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
              />

              <FaEye className="absolute right-5 top-7 text-gray-500 cursor-pointer" />

            </div>

          </div>


          <div className="flex justify-end mt-3">

            <button className="text-violet-600 hover:underline">
              Forgot Password?
            </button>

          </div>


          <button className="w-full mt-8 bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl transition">
            Login
          </button>


          <div className="flex items-center my-8">

            <hr className="flex-1" />

            <span className="mx-4 text-gray-500">
              OR
            </span>

            <hr className="flex-1" />

          </div>


          <div className="grid grid-cols-2 gap-4">

            <button className="border py-4 rounded-xl flex justify-center items-center gap-3 hover:bg-gray-100 transition">
              <FaGoogle />
              Google
            </button>

            <button className="border py-4 rounded-xl flex justify-center items-center gap-3 hover:bg-gray-100 transition">
              <FaGithub />
              GitHub
            </button>

          </div>



          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <span className="text-violet-600 cursor-pointer font-semibold">
              Sign Up
            </span>
          </p>

        </div>

      </div>

    </section>
  );
};

export default Login;