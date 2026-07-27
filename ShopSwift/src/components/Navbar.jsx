import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  const { currentUser, isLoggedIn } = useSelector((state) => state.auth);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-violet-600">
          ShopSwift
        </Link>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link to="/" className="hover:text-violet-600 transition">
            Home
          </Link>

          <Link to="/products" className="hover:text-violet-600 transition">
            Products
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-5">

          {isLoggedIn && (
            <Link to="/cart" className="relative hover:text-violet-600 transition">
              <ShoppingCart size={24} />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {isLoggedIn &&
            (currentUser?.profileImage ? (
              <img
                src={currentUser.profileImage}
                alt=""
                onClick={() => navigate("/profile")}
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
            ) : (
              <div
                onClick={() => navigate("/profile")}
                className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center cursor-pointer"
              >
                {currentUser?.name?.charAt(0).toUpperCase()}
              </div>
            ))}

          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 md:hidden">
          {isLoggedIn && (
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-5 py-5 gap-5">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-medium hover:text-violet-600"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="font-medium hover:text-violet-600"
            >
              Products
            </Link>

            <button className="flex items-center gap-2 hover:text-violet-600">
              <Search size={20} />
              Search
            </button>

            {isLoggedIn &&
              (currentUser?.profileImage ? (
                <div
                  onClick={() => {
                    navigate("/profile");
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img
                    src={currentUser.profileImage}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{currentUser.name}</span>
                </div>
              ) : (
                <div
                  onClick={() => {
                    navigate("/profile");
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center">
                    {currentUser?.name?.charAt(0).toUpperCase()}
                  </div>

                  <span>{currentUser?.name}</span>
                </div>
              ))}

            {isLoggedIn && (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;