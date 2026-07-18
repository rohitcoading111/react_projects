const Cart = () => {
  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10">

      <h1 className="text-4xl font-bold text-white text-center">
        Shopping Cart 🛒
      </h1>

      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Cart Items */}

        <div className="lg:col-span-2 space-y-6">

          <div className="bg-zinc-900 rounded-xl p-5 flex flex-col md:flex-row items-center gap-6">

            <div className="text-7xl">
              🎧
            </div>

            <div className="flex-1">

              <h2 className="text-white text-2xl font-semibold">
                Wireless Headphones
              </h2>

              <p className="text-zinc-400 mt-2">
                Electronics
              </p>

              <p className="text-lime-400 text-xl font-bold mt-3">
                ₹2999
              </p>

            </div>

            <div className="flex items-center gap-4">

              <button className="bg-zinc-800 text-white px-4 py-2 rounded-lg">
                -
              </button>

              <span className="text-white text-xl">
                1
              </span>

              <button className="bg-zinc-800 text-white px-4 py-2 rounded-lg">
                +
              </button>

            </div>

            <button className="bg-red-500 px-5 py-2 rounded-lg text-white">
              Remove
            </button>

          </div>

        </div>

        {/* Order Summary */}

        <div className="bg-zinc-900 rounded-xl p-6 h-fit">

          <h2 className="text-white text-2xl font-bold">
            Order Summary
          </h2>

          <div className="flex justify-between mt-8 text-zinc-300">
            <span>Subtotal</span>
            <span>₹2999</span>
          </div>

          <div className="flex justify-between mt-4 text-zinc-300">
            <span>Shipping</span>
            <span>₹99</span>
          </div>

          <hr className="my-6 border-zinc-700" />

          <div className="flex justify-between text-white text-2xl font-bold">
            <span>Total</span>
            <span>₹3098</span>
          </div>

          <button className="w-full bg-lime-400 text-black py-3 rounded-lg mt-8 font-semibold hover:bg-lime-300">
            Proceed To Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;