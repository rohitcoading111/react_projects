import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
      console.log("Inside addToCart", product);
  const existingProduct = cartItems.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};

const increaseQuantity = (id) => {
  setCartItems(
    cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCartItems(
    cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};
const removeItem = (id) => {
  setCartItems(
    cartItems.filter((item) => item.id !== id)
  );
};
return (
  <CartContext.Provider
   value={{
  cartItems,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  setCartItems,
}}
  >
    {children}
  </CartContext.Provider>
);
};

export default CartProvider;