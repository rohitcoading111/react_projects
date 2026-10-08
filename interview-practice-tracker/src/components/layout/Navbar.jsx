import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <NavLink to="/">
          <h1 className="text-xl font-bold text-gray-900">
            Interview Practice Tracker
          </h1>

          <p className="text-xs text-gray-500">
            Weekly Interview Preparation
          </p>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium ${
                isActive
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/questions"
            className={({ isActive }) =>
              `text-sm font-medium ${
                isActive
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`
            }
          >
            Questions
          </NavLink>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
            RP
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;