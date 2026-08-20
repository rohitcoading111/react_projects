import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
const Product = () => {

  const [category, setCategory] = useState("all");
 const { data, isLoading, isError,refetch  } = useQuery({
  queryKey: ["products", category],

  queryFn: async () => {
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    const res = await fetch(url);

    const data = await res.json();

    return data;
  }
});

if(isLoading){
    return <h2>loading in process</h2>
}

if(isError){
  return <h2>api is errores</h2>
}


  return (
     <div>
    {data?.map((product) => (
      <div key={product.id}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    ))}
    <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">Select Category</option>
  <option value="electronics">Electronics</option>
  <option value="jewelery">Jewelery</option>
  <option value="men's clothing">Men's Clothing</option>
  <option value="women's clothing">Women's Clothing</option>
</select>
    <button onClick={refetch}>
      Refresh Products
     </button>
  </div>
  )
}

export default Product