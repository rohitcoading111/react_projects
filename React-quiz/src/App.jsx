import React from "react";
import Header from "./components/header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;