import { useContext, useState } from "react";
import { Star } from "lucide-react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Shop = () => {
  const { products } = useContext(ProductContext);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const { cartItems, addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  // Category button classes
  const getButtonClass = (category) => {
    return selectedCategory === category
      ? "w-full bg-lime-400 text-black py-3 rounded-lg font-semibold transition"
      : "w-full bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white py-3 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition";
  };


  // Search Suggestions
  const suggestions = search.trim()
    ? products
        .filter((product) =>
          product.title
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .slice(0, 5)
    : [];


  // Filter Products
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const searchMatch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });


  return (
    <div
      className="
        min-h-screen
        bg-white
        dark:bg-zinc-950
        py-10
        px-6
        transition-colors
        duration-300
      "
    >

      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <h1 className="text-4xl font-bold text-black dark:text-white text-center">
          Shop Products
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 text-center mt-3">
          Explore our latest collection
        </p>


        {/* Search */}

        <div className="max-w-2xl mx-auto mt-8 relative">

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                flex-1
                bg-white
                dark:bg-zinc-900
                border
                border-zinc-300
                dark:border-zinc-700
                text-black
                dark:text-white
                px-5
                py-3
                rounded-xl
                outline-none
                focus:border-lime-400
              "
            />

            <button
              onClick={() => setSearchTerm(search)}
              className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-300 transition"
            >
              Search
            </button>

          </div>


          {/* Suggestions */}

          {search && suggestions.length > 0 && (

            <div
              className="
                absolute
                top-full
                left-0
                right-0
                mt-2
                bg-white
                dark:bg-zinc-900
                border
                border-zinc-300
                dark:border-zinc-700
                rounded-xl
                overflow-hidden
                z-50
                shadow-xl
              "
            >

              {suggestions.map((product) => (

                <div
                  key={product.id}
                  onClick={() => {
                    setSearch(product.title);
                    setSearchTerm(product.title);
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    px-4
                    py-3
                    hover:bg-zinc-100
                    dark:hover:bg-zinc-800
                    cursor-pointer
                    border-b
                    border-zinc-200
                    dark:border-zinc-800
                    last:border-none
                  "
                >

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-contain bg-white rounded p-1"
                  />

                  <div className="min-w-0">

                    <p className="text-black dark:text-white truncate">
                      {product.title}
                    </p>

                    <p className="text-lime-500 dark:text-lime-400 text-sm">
                      ${product.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* Main Section */}

        <div className="mt-10 flex flex-col lg:flex-row gap-8">


          {/* Categories */}

          <div className="lg:w-1/4">

            <div
              className="
                bg-zinc-100
                dark:bg-zinc-900
                border
                border-zinc-200
                dark:border-zinc-800
                rounded-2xl
                p-6
                sticky
                top-24
              "
            >

              <h2 className="text-black dark:text-white text-2xl font-bold mb-6">
                Categories
              </h2>


              <div className="flex flex-col gap-3">

                <button
                  onClick={() => setSelectedCategory("all")}
                  className={getButtonClass("all")}
                >
                  All Products
                </button>


                <button
                  onClick={() => setSelectedCategory("electronics")}
                  className={getButtonClass("electronics")}
                >
                  Electronics
                </button>


                <button
                  onClick={() => setSelectedCategory("jewelery")}
                  className={getButtonClass("jewelery")}
                >
                  Jewelery
                </button>


                <button
                  onClick={() =>
                    setSelectedCategory("men's clothing")
                  }
                  className={getButtonClass("men's clothing")}
                >
                  Men's Clothing
                </button>


                <button
                  onClick={() =>
                    setSelectedCategory("women's clothing")
                  }
                  className={getButtonClass("women's clothing")}
                >
                  Women's Clothing
                </button>

              </div>

            </div>

          </div>


          {/* Products */}

          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">


            {filteredProducts.map((product) => {

              const isInCart = cartItems.some(
                (item) => item.id === product.id
              );


              return (

                <div
                  key={product.id}
                  className="
                    bg-white
                    dark:bg-zinc-900
                    rounded-2xl
                    overflow-hidden
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    hover:border-lime-400
                    dark:hover:border-lime-400
                    hover:-translate-y-1
                    transition
                    duration-300
                    shadow-sm
                    dark:shadow-none
                  "
                >


                  {/* Product Image */}

                  <div className="h-60 bg-white flex items-center justify-center p-6">

                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full object-contain"
                    />

                  </div>


                  {/* Product Info */}

                  <div className="p-5">

                    <h2 className="text-black dark:text-white text-lg font-semibold truncate">
                      {product.title}
                    </h2>


                    <p className="text-zinc-600 dark:text-zinc-400 mt-2 capitalize">
                      {product.category}
                    </p>


                    <div className="flex justify-between items-center mt-4">

                      <span className="text-lime-500 dark:text-lime-400 text-2xl font-bold">
                        ${product.price}
                      </span>


                      <div className="flex items-center gap-1 text-yellow-400">

                        <Star
                          size={18}
                          fill="currentColor"
                        />

                        <span className="text-black dark:text-white">
                          {product.rating.rate}
                        </span>

                      </div>

                    </div>


                    {/* Details */}

                    <Link to={`/product/${product.id}`}>

                      <button className="w-full mt-6 bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-300 transition">
                        View Details
                      </button>

                    </Link>


                    {/* Cart */}

                    <button
                      onClick={() => addToCart(product)}
                      disabled={isInCart}
                      className={`w-full mt-5 py-3 rounded-lg font-semibold transition ${
                        isInCart
                          ? "bg-green-500 text-white cursor-not-allowed"
                          : "bg-lime-400 text-black hover:bg-lime-300"
                      }`}
                    >

                      {isInCart
                        ? "✅ Added"
                        : "🛒 Add to Cart"}

                    </button>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Shop;