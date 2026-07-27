import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToFeatured = () => {
    const section = document.getElementById("featured-products");

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-br from-violet-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-medium text-sm sm:text-base">
            🚀 New Collection 2026
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mt-6">
            Shop Smarter <br />
            <span className="text-violet-600">Live Better.</span>
          </h1>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Discover thousands of premium products at unbeatable prices.
            Fast delivery, secure payments, and an amazing shopping experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mt-10">
            <button
              onClick={scrollToFeatured}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition flex items-center justify-center gap-2"
            >
              Shop Now
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => navigate("/products")}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl border-2 border-violet-600 text-violet-600 font-semibold hover:bg-violet-600 hover:text-white transition"
            >
              Explore
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
            alt="Shopping"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;