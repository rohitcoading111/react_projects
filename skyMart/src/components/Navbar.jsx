import {
  ShoppingCart,
  LogOut,
  Zap,
  Sun,
  Moon,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const [loggedInUser, setLoggedInUser] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const navigate = useNavigate();


  // Login user check
  useEffect(() => {

    const updateUser = () => {

      const user = JSON.parse(
        localStorage.getItem("currentUser")
      );

      setLoggedInUser(user);
    };

    updateUser();

    window.addEventListener("userLogin", updateUser);

    return () => {
      window.removeEventListener("userLogin", updateUser);
    };

  }, []);


  // Dark / Light Theme
  useEffect(() => {

    if (darkMode) {

      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");

    } else {

      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");

    }

  }, [darkMode]);


  // Logout
  const handleLogout = () => {

    localStorage.removeItem("currentUser");

    setLoggedInUser(null);

    navigate("/login");
  };


  return (

    <nav className="
      bg-white
      dark:bg-[#0B0B0B]
      border-b
      border-zinc-200
      dark:border-zinc-800
      h-20
    ">

      <div className="
        max-w-7xl
        mx-auto
        h-full
        px-6
        flex
        items-center
        justify-between
      ">


        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer"
        >

          <div className="bg-lime-400 p-2 rounded-xl">

            <Zap
              className="text-black"
              size={22}
              fill="black"
            />

          </div>

          <h1 className="text-2xl font-bold text-black dark:text-white">

            Sky
            <span className="text-lime-400">
              Mart
            </span>

          </h1>

        </Link>


        {/* Navigation Links */}

        <ul className="
          flex
          items-center
          gap-8
          text-black
          dark:text-white
        ">

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


        {/* Right Side */}

        <div className="flex items-center gap-4">


          {/* Theme Button */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              border
              border-zinc-300
              dark:border-zinc-700
              p-3
              rounded-xl
              text-black
              dark:text-white
              hover:border-lime-400
              transition
            "
          >

            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}

          </button>


          {/* Login Check */}

          {!loggedInUser ? (

            <>

              <Link
                to="/login"
                className="
                  px-4
                  py-2
                  border
                  border-lime-400
                  text-lime-500
                  rounded-lg
                  hover:bg-lime-400
                  hover:text-black
                  transition
                "
              >
                Login
              </Link>


              <Link
                to="/signup"
                className="
                  px-4
                  py-2
                  bg-lime-400
                  text-black
                  rounded-lg
                  font-semibold
                  hover:bg-lime-300
                  transition
                "
              >
                Sign Up
              </Link>

            </>

          ) : (

            <>

              {/* Cart */}

              <Link
                to="/cart"
                className="
                  border
                  border-zinc-300
                  dark:border-zinc-700
                  p-3
                  rounded-xl
                  text-black
                  dark:text-white
                  hover:border-lime-400
                  transition
                "
              >

                <ShoppingCart size={20} />

              </Link>


              {/* User */}

              <div className="
                flex
                items-center
                gap-2
                border
                border-zinc-300
                dark:border-zinc-700
                rounded-xl
                px-3
                py-2
                cursor-pointer
                hover:border-lime-400
                transition
              ">

                <div className="
                  w-8
                  h-8
                  rounded-full
                  bg-lime-400
                  text-black
                  flex
                  items-center
                  justify-center
                  font-semibold
                ">

                  {loggedInUser.name
                    .charAt(0)
                    .toUpperCase()}

                </div>


                <span className="text-black dark:text-white text-sm">

                  {loggedInUser.name}

                </span>

              </div>


              {/* Logout */}

              <button
                onClick={handleLogout}
                className="
                  border
                  border-zinc-300
                  dark:border-zinc-700
                  p-3
                  rounded-xl
                  text-black
                  dark:text-white
                  hover:border-red-500
                  transition
                "
              >

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