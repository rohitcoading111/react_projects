import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import ProductProvider from "../context/TopProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />

      <ProductProvider>
        <FeaturedProducts />
      </ProductProvider>

      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Home;