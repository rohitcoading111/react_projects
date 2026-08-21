const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative flex h-72 items-center justify-center bg-gray-50 p-8">

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Details */}
      <div className="p-5">

        <h2 className="line-clamp-2 min-h-[56px] text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="text-sm font-medium text-gray-700">
            {product.rating?.rate || "4.5"}
          </span>

          <span className="text-sm text-gray-400">
            ({product.rating?.count || 0})
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-xs text-gray-400">
              Price
            </p>

            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          <button className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600">
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;