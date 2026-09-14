import React from "react";
import Header from "./components/header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./MainContents/Dashboard";
import { Routes, Route } from "react-router-dom";
import Quiz from "./MainContents/Quiz";
import Result from "./components/Result";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/quiz" element={<Quiz />} />
         <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;