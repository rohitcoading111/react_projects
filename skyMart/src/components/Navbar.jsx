import { ShoppingCart, LogOut, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const currentUser = null;


const Navbar = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <nav className="bg-[#0B0B0B] border-b border-zinc-800 h-20">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">


        <Link to="/" className="flex items-center gap-2 cursor-pointer">

          <div className="bg-lime-400 p-2 rounded-xl">
            <Zap className="text-black" size={22} fill="black" />
          </div>

          <h1 className="text-2xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>

        </Link>

        <ul className="flex items-center gap-8 text-white">

          <li>
            <Link
              className="hover:text-lime-400 transition"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-lime-400 transition"
              to="/shop"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-lime-400 transition"
              to="/about"
            >
              About
            </Link>
          </li>

        </ul>


        <div className="flex items-center gap-4">

          {!currentUser ? (

            <>
           {
    currentUser
    ?(
      <Link
        to="/"
        className="px-4 py-2 border border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-black transition"
      >
        {currentUser.name}
      </Link>
    )
    : (
      <Link
        to="/login"
        className="px-4 py-2 border border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-black transition"
      >
        Login
      </Link>
    )
}
   
              <Link
                to="/signup"
                className="px-4 py-2 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-300 transition"
              >
                Sign Up
              </Link>
            </>

          ) : (

            <>
              <Link
                to="/cart"
                className="border border-zinc-700 p-3 rounded-xl text-white hover:border-lime-400 transition"
              >
                <ShoppingCart size={20} />
              </Link>

              <div className="flex items-center gap-2 border border-zinc-700 rounded-xl px-3 py-2 cursor-pointer hover:border-lime-400 transition">

                <div className="w-8 h-8 rounded-full bg-lime-400 text-black flex items-center justify-center font-semibold">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>

                <span className="text-white text-sm">
                  {currentUser.name}
                </span>

              </div>


              <button className="border border-zinc-700 p-3 rounded-xl text-white hover:border-red-500 transition">
                <LogOut size={20} />
              </button>

            </>

          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;