import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";


const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
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
          <button className="hover:text-violet-600 transition">
            <Search size={22} />
          </button>

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
)}     </div>
      </div>
    </nav>
  );
};

export default Navbar;