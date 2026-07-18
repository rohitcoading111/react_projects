import ProductCard from "../components/ProductCard";
import products from "../data/products";
const Shop = () => {

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10">

      <h1 className="text-4xl font-bold text-white text-center">
        Shop Products
      </h1>

      <p className="text-zinc-400 text-center mt-3">
        Explore our latest collection
      </p>

      <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row gap-8">


        <div className="lg:w-1/4 bg-zinc-900 rounded-xl p-6 h-fit">

          <h2 className="text-white text-2xl font-semibold mb-5">
            Filters
          </h2>

          <button className="w-full bg-lime-400 text-black py-2 rounded-lg font-semibold mb-3">
            All Products
          </button>

          <button className="w-full bg-zinc-800 text-white py-2 rounded-lg mb-3">
            Electronics
          </button>

          <button className="w-full bg-zinc-800 text-white py-2 rounded-lg mb-3">
            Fashion
          </button>

          <button className="w-full bg-zinc-800 text-white py-2 rounded-lg mb-3">
            Furniture
          </button>

          <button className="w-full bg-zinc-800 text-white py-2 rounded-lg">
            Fitness
          </button>

        </div>


<div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>

      </div>

    </div>
  );
};

export default Shop;