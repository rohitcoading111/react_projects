import { FaTrash, FaArrowRight } from "react-icons/fa";

const Cart = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-6">

            {/* Item 1 */}

            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">

              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="product"
                className="w-36 h-36 object-contain"
              />

              <div className="flex-1">

                <h2 className="text-2xl font-semibold">
                  Fjallraven Backpack
                </h2>

                <p className="text-gray-500 mt-2">
                  Electronics
                </p>

                <h3 className="text-2xl font-bold text-violet-600 mt-4">
                  $109.95
                </h3>

              </div>

              <div className="flex flex-col items-center gap-5">

                {/* Quantity */}

                <div className="flex items-center gap-4">

                  <button className="w-10 h-10 rounded-lg bg-gray-200">
                    -
                  </button>

                  <span className="text-xl font-semibold">
                    1
                  </span>

                  <button className="w-10 h-10 rounded-lg bg-gray-200">
                    +
                  </button>

                </div>

                <button className="text-red-500 hover:text-red-700 transition">
                  <FaTrash size={20} />
                </button>

              </div>

            </div>

          </div>

          {/* Summary */}

          <div>

            <div className="bg-white rounded-2xl shadow-md p-8 sticky top-28">

              <h2 className="text-3xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$109.95</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$8.00</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>$117.95</span>
                </div>

              </div>

              <button className="mt-8 w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl flex justify-center items-center gap-3 transition">

                Checkout

                <FaArrowRight />

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Cart;