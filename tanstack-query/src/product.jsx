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

}
  return (
    <div>product</div>
  )
}

export default product