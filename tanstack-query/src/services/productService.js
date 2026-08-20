const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async (category) => {
  const url =
    category === "all"
      ? `${BASE_URL}/products`
      : `${BASE_URL}/products/category/${category}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};