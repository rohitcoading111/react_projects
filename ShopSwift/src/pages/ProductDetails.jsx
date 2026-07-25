import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Product Section */}

        <div className="grid lg:grid-cols-2 gap-16 bg-white rounded-3xl shadow-lg p-10">

          {/* Image */}

          <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-10">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="Product"
              className="w-96 h-96 object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-medium">
              Electronics
            </span>

            <h1 className="text-4xl font-bold mt-5">
              Fjallraven Backpack
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">4.8</span>
              <span className="text-gray-500">(1,245 Reviews)</span>
            </div>

            <h2 className="text-5xl font-bold text-violet-600 mt-8">
              $109.95
            </h2>

            <p className="text-gray-600 mt-8 leading-8">
              This premium backpack is perfect for travel,
              college, office, and everyday use.
              Designed with high-quality materials and
              long-lasting durability.
            </p>

            {/* Quantity */}

            <div className="flex items-center gap-5 mt-10">

              <button className="w-12 h-12 rounded-xl bg-gray-200 text-xl">
                -
              </button>

              <span className="text-2xl font-semibold">
                1
              </span>

              <button className="w-12 h-12 rounded-xl bg-gray-200 text-xl">
                +
              </button>

            </div>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">

              <button className="flex items-center gap-3 bg-violet-600 text-white px-8 py-4 rounded-xl hover:bg-violet-700 transition">
                <FaShoppingCart />
                Add To Cart
              </button>

              <button className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-xl hover:bg-violet-600 hover:text-white transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

        {/* Related Products */}

        <div className="mt-24">

          <h2 className="text-3xl font-bold mb-10">
            Related Products
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl h-72 shadow-md"></div>
            <div className="bg-white rounded-2xl h-72 shadow-md"></div>
            <div className="bg-white rounded-2xl h-72 shadow-md"></div>
            <div className="bg-white rounded-2xl h-72 shadow-md"></div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDetails;