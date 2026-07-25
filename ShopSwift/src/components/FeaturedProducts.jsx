import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 129.99,
    category: "Electronics",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    title: "Running Shoes",
    price: 89.99,
    category: "Fashion",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 249.99,
    category: "Electronics",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 4,
    title: "Backpack",
    price: 59.99,
    category: "Accessories",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-3">
          Hand-picked products just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
            category={product.category}
          />
        ))}
      </div>

    </section>
  );
};

export default FeaturedProducts;