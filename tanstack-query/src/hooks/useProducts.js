import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";

export const useProducts = (category) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => getProducts(category),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000
  });
};