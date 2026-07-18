import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 rounded-xl p-5 hover:scale-105 transition duration-300">

      <div className="text-6xl text-center">
        {product.image}
      </div>

      <h2 className="text-white text-xl font-semibold mt-5">
        {product.name}
      </h2>

      <p className="text-zinc-400 mt-2">
        {product.category}
      </p>

      <p className="text-lime-400 text-lg font-semibold mt-3">
        ₹{product.price}
      </p>

      <Link to={`/product/${product.id}`}>
        <button className="w-full bg-lime-400 text-black py-2 rounded-lg mt-5 font-semibold hover:bg-lime-300">
          View Details
        </button>
      </Link>

    </div>
  );
};

export default ProductCard;