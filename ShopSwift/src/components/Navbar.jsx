import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
const handleLogout = () => {
  dispatch(logout());
  localStorage.removeItem("currentUser");
  navigate("/login");
};
const { currentUser, isLoggedIn } = useSelector(
  (state) => state.auth
);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-violet-600">
          ShopSwift
        </Link>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-violet-600 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-violet-600 transition-all duration-300"
          >
            Products
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5">
  <button className="hover:text-violet-600 transition">
    <Search size={22} />
  </button>


  {isLoggedIn && (
    <Link
      to="/cart"
      className="relative hover:text-violet-600 transition"
    >
      <ShoppingCart size={24} />

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  )}

</div>

{currentUser?.profileImage ? (
  <img
    src={currentUser.profileImage}
    alt="Profile"
    className="w-10 h-10 rounded-full object-cover"
  />
) : (
  <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center">
    {currentUser?.name?.charAt(0).toUpperCase()}
  </div>
  
)}  

  {isLoggedIn && (
  <button
    onClick={handleLogout}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
  >
    Logout
  </button>
)}
   </div>

      </div>
    </nav>
  );
};

export default Navbar;