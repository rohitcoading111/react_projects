import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    dispatch(login(user));
  }
}, []);
  return (
    <Routes>
      <Route
  path="/"
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  }
/>

     <Route
  path="/products"
  element={
    <ProtectedRoute>
      <Products />
    </ProtectedRoute>
  }
/>

<Route
  path="/cart"
  element={
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  }
/>

      <Route path="/product/:id" element={<ProductDetails />} />


  <Route
  path="/login"
  element={
    <GuestRoute>
      <Login />
    </GuestRoute>
  }
/>

<Route
  path="/signup"
  element={
    <GuestRoute>
      <Signup />
    </GuestRoute>
  }
/>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;