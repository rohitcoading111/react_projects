import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
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

<Link to="/cart" className="relative">

  <ShoppingCart size={24} />

  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {totalItems}
    </span>
  )}

</Link>

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;