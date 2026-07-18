import { ShoppingCart, Star } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$120",
      rating: "4.8",
      image: "🎧",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$180",
      rating: "4.7",
      image: "⌚",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$80",
      rating: "4.9",
      image: "🖱️",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "$150",
      rating: "4.6",
      image: "🔊",
    },
  ];

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
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-lime-400 transition"
          >
            <div className="h-48 flex items-center justify-center text-7xl bg-zinc-800">
              {product.image}
            </div>

            <div className="p-5">
              <h3 className="text-white text-lg font-semibold">
                {product.name}
              </h3>

              <div className="flex justify-between items-center mt-3">
                <span className="text-lime-400 font-bold">
                  {product.price}
                </span>

                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={18} fill="currentColor" />
                  <span className="text-white">{product.rating}</span>
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