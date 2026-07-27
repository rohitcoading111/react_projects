import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const Products = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  const { search, category, sort } = useSelector(
    (state) => state.filter
  );

  let filteredProducts = [...products];

  filteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

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
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 text-center sm:text-left">
          Explore Products
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 mb-10 sm:mb-12">
          <div className="w-full lg:flex-1">
            <SearchBar />
          </div>

          <div className="w-full lg:w-auto">
            <CategoryFilter />
          </div>

          <div className="w-full lg:w-auto">
            <SortDropdown />
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl sm:text-3xl font-bold">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
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
        )}
      </div>
    </>
  );
};

export default Products;