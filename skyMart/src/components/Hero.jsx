const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Left */}
        <div className="flex-1">

          <p className="text-lime-400 font-semibold mb-3">
            Welcome to SkyMart
          </p>

          <h1 className="text-5xl font-bold text-white leading-tight">
            Shop <span className="text-lime-400">Smarter</span>, <br />
            Live Better.
          </h1>

          <p className="text-zinc-400 mt-6 leading-7">
            Discover premium products at affordable prices.
            Fast delivery, secure payment and trusted quality
            all in one place.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-300 transition">
              Explore Products
            </button>

            <button className="border border-zinc-600 text-white px-6 py-3 rounded-lg hover:border-lime-400 hover:text-lime-400 transition">
              Learn More
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="flex-1">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

            <div className="text-6xl text-center mb-5">
              📦
            </div>

            <h2 className="text-white text-2xl font-semibold text-center mb-6">
              Premium Shopping
            </h2>

            <div className="space-y-3 text-zinc-300">

              <p>✅ Secure Payments</p>

              <p>🚚 Fast Delivery</p>

              <p>🔄 Easy Returns</p>

              <p>⭐ Best Quality Products</p>

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-lime-400">120+</h2>
          <p className="text-zinc-400 mt-2">Products</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-lime-400">500+</h2>
          <p className="text-zinc-400 mt-2">Customers</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-lime-400">850+</h2>
          <p className="text-zinc-400 mt-2">Orders</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-lime-400">4.9★</h2>
          <p className="text-zinc-400 mt-2">Rating</p>
        </div>

      </div>

    </section>
  );
};

export default Hero;