import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = useContext(CartContext);
const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
  return (
    <div className="min-h-screen bg-zinc-950 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <h2 className="text-zinc-400 text-xl">
            Your Cart is Empty 😢
          </h2>
        ) : (
          <div className="space-y-6">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 rounded-xl p-5 flex items-center justify-between"
              >

                <div className="flex items-center gap-6">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain bg-white rounded-lg p-2"
                  />

                  <div>

                    <h2 className="text-white text-xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-zinc-400 mt-2">
                      {item.category}
                    </p>

                    <p className="text-lime-400 font-bold mt-2">
                      ${item.price}
                    </p>

                 <div className="flex items-center gap-4 mt-4">

  <button
    onClick={() => decreaseQuantity(item.id)}
    className="bg-red-500 w-8 h-8 rounded-full text-white"
  >
    -
  </button>

  <span className="text-white font-bold">
    {item.quantity}
  </span>

  <button
    onClick={() => increaseQuantity(item.id)}
    className="bg-lime-500 w-8 h-8 rounded-full text-black"
  >
    +
  </button>

</div>

                  </div>

                </div>

               <button
  onClick={() => removeItem(item.id)}
  className="text-red-500 hover:text-red-400"
>
  <Trash2 size={28} />
</button>

              </div>
            ))}
          </div>
        )}
                 <div className="mt-10 bg-zinc-900 rounded-xl p-6 flex justify-between items-center">

  <h2 className="text-2xl text-white font-bold">
    Total
  </h2>

  <h2 className="text-3xl text-lime-400 font-bold">
    ${totalPrice.toFixed(2)}
  </h2>

           </div>

      </div>
    </div>
  );
};

export default Cart;