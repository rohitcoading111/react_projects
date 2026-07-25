import { useSelector } from "react-redux";
import { FaTrash, FaArrowRight } from "react-icons/fa";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 0 : 0;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-6">

            {cartItems.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-10 text-center">
                <h2 className="text-2xl font-semibold">
                  Your Cart is Empty 🛒
                </h2>

                <p className="text-gray-500 mt-3">
                  Add some products to your cart.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-36 h-36 object-contain"
                  />

                  <div className="flex-1">

                    <h2 className="text-2xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2 capitalize">
                      {item.category}
                    </p>

                    <h3 className="text-2xl font-bold text-violet-600 mt-4">
                      ${item.price}
                    </h3>

                  </div>

                  <div className="flex flex-col items-center gap-5">

                    {/* Quantity */}

                    <div className="flex items-center gap-4">

                      <button className="w-10 h-10 rounded-lg bg-gray-200">
                        -
                      </button>

                      <span className="text-xl font-semibold">
                        {item.quantity}
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
              ))
            )}

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
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (18%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

              </div>

              <button
                className="mt-8 w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl flex justify-center items-center gap-3 transition"
                disabled={cartItems.length === 0}
              >
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