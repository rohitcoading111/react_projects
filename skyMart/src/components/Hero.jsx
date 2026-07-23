import {Link} from "react-router-dom";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}

        <div>

          <span className="inline-block bg-lime-400/10 text-lime-400 border border-lime-400/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 Welcome to SkyMart
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Shop{" "}
            <span className="text-lime-400">Smarter</span>
            <br />
            Live Better.
          </h1>

          <p className="text-zinc-400 text-lg mt-6 leading-8 max-w-lg">
            Discover premium products at affordable prices.
            Fast delivery, secure payments and trusted quality
            all in one place.
          </p>

          <div className="mt-10 flex gap-5">

           
            <Link to="/shop">
  <button className="bg-lime-400 text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-lime-300 transition duration-300 shadow-lg shadow-lime-400/20">
    Explore Products
  </button>
</Link>

            <button className="border border-zinc-700 px-7 py-3 rounded-xl text-black hover:bg-red-400 hover:text-lime-400 transition duration-300">
              Learn More
            </button>

          </div>

        </div>


        <div className="relative">



          <div className="absolute inset-0 bg-lime-400/10 blur-3xl rounded-full"></div>

          <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-3xl p-10">

            <div className="text-8xl text-center">
              📦
            </div>

            <h2 className="text-white text-3xl font-bold text-center mt-6">
              Premium Shopping
            </h2>

            <p className="text-zinc-400 text-center mt-3">
              Everything you need in one place.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-zinc-800 rounded-xl p-4 text-center">
                <h3 className="text-3xl">🔒</h3>
                <p className="text-white mt-2 font-medium">
                  Secure
                </p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-4 text-center">
                <h3 className="text-3xl">🚚</h3>
                <p className="text-white mt-2 font-medium">
                  Fast Delivery
                </p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-4 text-center">
                <h3 className="text-3xl">🔄</h3>
                <p className="text-white mt-2 font-medium">
                  Easy Returns
                </p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-4 text-center">
                <h3 className="text-3xl">⭐</h3>
                <p className="text-white mt-2 font-medium">
                  Top Quality
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center hover:-translate-y-2 transition">
          <h2 className="text-4xl font-bold text-lime-400">
            120+
          </h2>
          <p className="text-zinc-400 mt-3">
            Products
          </p>
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center hover:-translate-y-2 transition">
          <h2 className="text-4xl font-bold text-lime-400">
            500+
          </h2>
          <p className="text-zinc-400 mt-3">
            Happy Customers
          </p>
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center hover:-translate-y-2 transition">
          <h2 className="text-4xl font-bold text-lime-400">
            850+
          </h2>
          <p className="text-zinc-400 mt-3">
            Orders Delivered
          </p>
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center hover:-translate-y-2 transition">
          <h2 className="text-4xl font-bold text-lime-400">
            4.9★
          </h2>
          <p className="text-zinc-400 mt-3">
            Customer Rating
          </p>
        </div>

      </div>

    </section>
  );
};

export default Hero;