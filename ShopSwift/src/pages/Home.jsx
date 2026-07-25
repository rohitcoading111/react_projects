import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <Footer />
    </>
  );
}

export default App;