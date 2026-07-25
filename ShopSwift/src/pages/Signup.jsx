import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";

const Signup = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        <div className="hidden lg:flex flex-col justify-center bg-violet-600 text-white p-16">
          <h1 className="text-5xl font-bold">
            Join ShopSwift 🚀
          </h1>

          <p className="mt-6 text-lg leading-8 text-violet-100">
            Create your account and enjoy a fast, secure,
            and premium shopping experience.
          </p>
        </div>

        <div className="p-12">

          <h2 className="text-4xl font-bold">
            Create Account
          </h2>

          <p className="text-gray-500 mt-3">
            Fill in your details below.
          </p>


          <div className="mt-8">
            <label className="font-medium">Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="mt-5">
            <label className="font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>


          <div className="mt-5">
            <label className="font-medium">Password</label>

            <div className="relative">
              <input
                type="password"
                placeholder="Create password"
                className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
              />

              <FaEye className="absolute right-5 top-7 text-gray-500 cursor-pointer" />
            </div>
          </div>


          <div className="mt-5">
            <label className="font-medium">Confirm Password</label>

            <div className="relative">
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
              />

              <FaEye className="absolute right-5 top-7 text-gray-500 cursor-pointer" />
            </div>
          </div>

          <button className="w-full mt-8 bg-violet-600 text-white py-4 rounded-xl hover:bg-violet-700 transition">
            Create Account
          </button>


          <div className="flex items-center my-8">
            <hr className="flex-1" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-1" />
          </div>


          <div className="grid grid-cols-2 gap-4">

            <button className="border py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition">
              <FaGoogle />
              Google
            </button>

            <button className="border py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition">
              <FaGithub />
              GitHub
            </button>

          </div>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?
            <span className="text-violet-600 font-semibold cursor-pointer ml-2">
              Login
            </span>
          </p>

        </div>

      </div>
    </section>
  );
};

export default Signup;