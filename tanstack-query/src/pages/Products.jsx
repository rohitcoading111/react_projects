import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [category, setCategory] = useState("all");

  const { data, isLoading, isError, refetch } =
    useProducts(category);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Products</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <button onClick={refetch}>
        Refresh Products
      </button>

      {data?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;