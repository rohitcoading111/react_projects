import { ShoppingCart, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({
  id,
  image,
  title,
  price,
  rating,
  category,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, title, price, rating, category }));
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="bg-gray-100 h-52 sm:h-60 md:h-64 flex items-center justify-center overflow-hidden p-4">
        <img
          src={image}
          alt={title}
          className="h-40 sm:h-44 md:h-48 object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-xs sm:text-sm uppercase text-violet-600 font-medium truncate">
          {category}
        </p>

        <h3 className="mt-2 text-base sm:text-lg font-semibold line-clamp-2 h-12 sm:h-14">
          {title}
        </h3>

        <div className="flex items-center gap-2 mt-3">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="text-sm">{rating}</span>
        </div>

        <div className="flex justify-between items-center mt-5">
          <h2 className="text-xl sm:text-2xl font-bold text-violet-600">
            ${price}
          </h2>

          <button
            onClick={handleAddToCart}
            className="p-2.5 sm:p-3 rounded-full bg-green-600 text-white hover:bg-violet-700 transition"
          >
            <ShoppingCart size={18} />
          </button>
        </div>

        <Link
          to={`/product/${id}`}
          className="mt-5 w-full py-2.5 sm:py-3 rounded-xl border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white transition flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <Eye size={18} />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;