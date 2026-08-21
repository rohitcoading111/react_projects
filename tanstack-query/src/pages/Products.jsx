import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [category, setCategory] = useState("all");

  const { data, isLoading, isError, refetch, } =
    useProducts(category);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  return (
  <div className="min-h-screen bg-gray-50 px-6 py-10">

    {/* Header */}
    <div className="mx-auto mb-8 max-w-7xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <p className="text-sm font-medium text-indigo-600">
            OUR STORE
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            All Products
          </h1>

          <p className="mt-2 text-gray-500">
            Discover products you'll love.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium shadow-sm outline-none focus:border-indigo-500"
          >
            <option value="all">All Products</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>

          <button
            onClick={refetch}
            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Refresh
          </button>
        </div>

      </div>
    </div>


    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

  </div>
);
};

export default Products;