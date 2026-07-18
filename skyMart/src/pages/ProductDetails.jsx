import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
const ProductDetails = () => {

  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  if (!product) {
    return (
      <h1 className="text-white text-center text-3xl mt-20">
        Product Not Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-12">

      <div className="max-w-5xl mx-auto bg-zinc-900 rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="flex items-center justify-center">
          <div className="text-9xl">
            <img src={product.image} alt={product.name} className="h-96 object-contain" />
          </div>
        </div>

        <div>

          <h1 className="text-4xl font-bold text-white">
            {product.title}
          </h1>

          <p className="text-zinc-400 mt-3">
            Category : {product.category}
          </p>

          <p className="text-lime-400 text-3xl font-bold mt-5">
            ₹{product.price}
          </p>

          <p className="text-zinc-300 mt-6 leading-7">
            {product.description}
          </p>

          <button className="bg-lime-400 text-black px-8 py-3 rounded-lg mt-8 font-semibold hover:bg-lime-300">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;