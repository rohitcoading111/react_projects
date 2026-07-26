import { FaTrash, FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/cartSlice';

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 0 : 0;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-violet-100 text-violet-600 rounded-2xl">
            <FaShoppingBag size={24} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Shopping Cart
          </h1>
          <span className="ml-2 px-3 py-1 bg-violet-50 text-violet-600 font-semibold text-sm rounded-full border border-violet-100">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-12 text-center">
                <div className="w-16 h-16 bg-violet-50 text-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🛒
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Your Cart is Empty</h2>
                <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                  Looks like you haven't added anything to your cart yet.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6"
                >
                  <div className="w-28 h-28 bg-slate-50 rounded-2xl p-2 flex-shrink-0 flex items-center justify-center border border-slate-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                    <h2 className="text-lg font-bold text-slate-800 mt-2 line-clamp-1">
                      {item.title}
                    </h2>
                    <div className="text-xl font-black text-slate-900 mt-2">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center justify-between w-full sm:w-auto gap-4 border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
                    <div className="flex items-center bg-slate-100/80 rounded-xl p-1 border border-slate-200/60">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="w-8 h-8 rounded-lg bg-white text-slate-700 font-bold shadow-xs hover:bg-slate-50 active:scale-95 transition flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-bold text-slate-800 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="w-8 h-8 rounded-lg bg-white text-slate-700 font-bold shadow-xs hover:bg-slate-50 active:scale-95 transition flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-slate-400 hover:text-rose-500 p-2 rounded-xl hover:bg-rose-50 transition"
                      title="Remove item"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 sticky top-28">
              <h2 className="text-2xl font-black text-slate-900 mb-6 pb-4 border-b border-slate-100">
                Order Summary
              </h2>
              
              <div className="space-y-4 text-slate-600">
                <div className="flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Shipping</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs uppercase tracking-wide">
                    Free
                  </span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Tax (18%)</span>
                  <span className="font-bold text-slate-800">${tax.toFixed(2)}</span>
                </div>
                
                <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-black text-violet-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                disabled={cartItems.length === 0}
                className="mt-8 w-full bg-violet-600 hover:bg-violet-700 disabled:bg-slate-200 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl flex justify-center items-center gap-3 shadow-lg shadow-violet-200 hover:shadow-violet-300 active:scale-[0.98] transition"
              >
                Proceed to Checkout
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
