import React from 'react'
import { useQuery } from "@tanstack/react-query";
const Product = () => {


  const { data, isLoading, isError,refetch } = useQuery({
  queryKey: ["products"],
  queryFn: async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=100")
    const data = await res.json();
    console.log(data);
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
    {data.map((product) => (
      <div key={product.id}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    ))}
    <button onClick={refetch}>
      Refresh Products
     </button>
  </div>
  )
}

export default Product