import { useContext } from "react";
import { Star } from "lucide-react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="min-h-screen bg-zinc-950 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-white text-center">
          Shop Products
        </h1>

        <p className="text-zinc-400 text-center mt-3">
          Explore our latest collection
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-8">

          <div className="lg:w-1/4">
            <div className="bg-zinc-900 rounded-2xl p-6 sticky top-24">

              <h2 className="text-white text-2xl font-bold mb-6">
                Categories
              </h2>

              <div className="flex flex-col gap-3">

                <button className="bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-300 transition">
                  All Products
                </button>

                <button className="bg-zinc-800 text-white py-3 rounded-lg hover:bg-zinc-700 transition">
                  Electronics
                </button>

                <button className="bg-zinc-800 text-white py-3 rounded-lg hover:bg-zinc-700 transition">
                  Jewelery
                </button>

                <button className="bg-zinc-800 text-white py-3 rounded-lg hover:bg-zinc-700 transition">
                  Men's Clothing
                </button>

                <button className="bg-zinc-800 text-white py-3 rounded-lg hover:bg-zinc-700 transition">
                  Women's Clothing
                </button>

              </div>

            </div>
          </div>

          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-lime-400 hover:-translate-y-1 transition duration-300"
              >

                <div className="h-60 bg-white flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain"
                  />
                </div>

                <div className="p-5">

                  <h2 className="text-white text-lg font-semibold truncate">
                    {product.title}
                  </h2>

                  <p className="text-zinc-400 mt-2 capitalize">
                    {product.category}
                  </p>

                  <div className="flex justify-between items-center mt-4">

                    <span className="text-lime-400 text-2xl font-bold">
                      ${product.price}
                    </span>

                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={18} fill="currentColor" />
                      <span className="text-white">
                        {product.rating.rate}
                      </span>
                    </div>

                  </div>
                  <Link to={`/product/${product.id}`}>
                  <button className="w-full mt-6 bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-300 transition">
                    View Details
                  </button>
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Shop;