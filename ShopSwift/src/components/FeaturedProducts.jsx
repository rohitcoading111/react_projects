import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <h1 className="text-center text-2xl sm:text-3xl py-20">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-600 text-lg sm:text-xl py-20 px-4">
        {error}
      </h1>
    );
  }

  return (
    <section
      id="featured-products"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16 lg:py-20"
    >
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Hand-picked products just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.thumbnail}
            title={product.title}
            price={product.price}
            rating={product.rating}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;