import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";

export const useProducts = (category) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => getProducts(category),
  });
};