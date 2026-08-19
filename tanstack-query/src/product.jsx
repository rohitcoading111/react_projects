import React from 'react'
import { useQuery } from "@tanstack/react-query";
const product = () => {



function Products() {

  const { data, isLoading, isError } = useQuery({
  queryKey: ["products"],
  queryFn: async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();
    return data;
  }
});

if(isLoading){
    <h2>loading in process</h2>
}

if(isError){
   <h2>api is errores</h2>
}

}
  return (
     <div>
    {data.map((product) => (
      <div key={product.id}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    ))}
  </div>
  )
}

export default product