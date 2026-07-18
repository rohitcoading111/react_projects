import { ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { TopProductsContext } from "../context/TopProducts";
const FeaturedProducts = () => {
const{ topProducts, setTopProducts } = useContext(TopProductsContext);


  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          Featured <span className="text-lime-400">Products</span>
        </h2>

        <p className="text-zinc-400 mt-3">
          Explore our most popular products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {topProducts.map((product) => (
  <div
    key={product.id}
    className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-lime-400 transition"
  >
    <div className="h-48 flex items-center justify-center bg-white p-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-full object-contain"
      />
    </div>

    <div className="p-5">
      <h3 className="text-white text-lg font-semibold line-clamp-1">
        {product.title}
      </h3>

      <div className="flex justify-between items-center mt-3">
        <span className="text-lime-400 font-bold">
          ${product.price}
        </span>

        <div className="flex items-center gap-1 text-yellow-400">
          <Star size={18} fill="currentColor" />
          <span className="text-white">
            {product.rating.rate}
          </span>
        </div>
      </div>
    
      <button className="w-full mt-5 flex items-center justify-center gap-2 bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-300 transition">
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  </div>
))}
      </div>
    </section>
  );
};

export default FeaturedProducts;