import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {

  const { products } = useContext(ProductContext);
  const { cartItems, addToCart } = useContext(CartContext);

  const { id } = useParams();

  const product = products.find((item) => item.id == id);


  // Product nahi mila
  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
        <h1 className="text-black dark:text-white text-center text-3xl">
          Product Not Found
        </h1>
      </div>
    );
  }


  // Product milne ke baad cart check
  const isInCart = cartItems.some(
    (item) => item.id === product.id
  );


  return (

    <div
      className="
        min-h-screen
        bg-white
        dark:bg-zinc-950
        px-6
        py-12
        transition-colors
        duration-300
      "
    >

      <div
        className="
          max-w-5xl
          mx-auto
          bg-zinc-100
          dark:bg-zinc-900
          border
          border-zinc-200
          dark:border-zinc-800
          rounded-xl
          p-8
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          transition-colors
        "
      >


        {/* Product Image */}

        <div className="flex items-center justify-center">

          <div className="
            bg-white
            rounded-xl
            p-6
            w-full
            flex
            items-center
            justify-center
          ">

            <img
              src={product.image}
              alt={product.title}
              className="h-96 object-contain"
            />

          </div>

        </div>


        {/* Product Information */}

        <div>

          <h1 className="
            text-4xl
            font-bold
            text-black
            dark:text-white
          ">
            {product.title}
          </h1>


          <p className="
            text-zinc-600
            dark:text-zinc-400
            mt-3
            capitalize
          ">
            Category : {product.category}
          </p>


          <p className="
            text-lime-500
            dark:text-lime-400
            text-3xl
            font-bold
            mt-5
          ">
            ₹{product.price}
          </p>


          <p className="
            text-zinc-700
            dark:text-zinc-300
            mt-6
            leading-7
          ">
            {product.description}
          </p>


          {/* Add To Cart */}

          <button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className={`
              px-8
              py-3
              rounded-lg
              mt-8
              font-semibold
              transition
              ${
                isInCart
                  ? "bg-green-500 text-white cursor-not-allowed"
                  : "bg-lime-400 text-black hover:bg-lime-300"
              }
            `}
          >

            {isInCart
              ? "✅ Added"
              : "🛒 Add To Cart"}

          </button>

        </div>

      </div>

    </div>

  );
};

export default ProductDetails;