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
  filteredProducts.sort(
    (a, b) => b.rating.rate - a.rating.rate
  );
}

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
    <>
      <Navbar />
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
    </div>
    </>
  );
  
  
};

export default Products;