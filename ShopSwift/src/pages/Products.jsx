import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) {
    return (
      <h1 className="text-center text-3xl py-20">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-600 py-20">
        {error}
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-10">
        Explore Products
      </h1>

      <div className="grid lg:grid-cols-3 gap-5 mb-12">
        <SearchBar />
        <CategoryFilter />
        <SortDropdown />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;