import { createContext, useEffect, useState } from "react";


export const TopProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=6"
        );
        const data = await response.json();
        setTopProducts(data);
      } catch (error) {
        console.error("Error fetching top products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <TopProductsContext.Provider
      value={{
        topProducts,
        setTopProducts,
      }}
    >
      {children}
    </TopProductsContext.Provider>
  );
};

export default ProductProvider;