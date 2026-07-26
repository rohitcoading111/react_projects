import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-br from-violet-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        <div className="flex-1">

          <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-medium">
            🚀 New Collection 2026
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-6">
            Shop Smarter <br />
            <span className="text-violet-600">Live Better.</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Discover thousands of premium products at unbeatable prices.
            Fast delivery, secure payments, and an amazing shopping experience.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="px-7 py-4 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition flex items-center gap-2">
              Shop Now
              <ArrowRight size={20} />
            </button>

            <button className="px-7 py-4 rounded-xl border-2 border-violet-600 text-violet-600 font-semibold hover:bg-violet-600 hover:text-white transition">
              Explore
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
            alt="Shopping"
            className="w-[500px] rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;