import {
  Laptop,
  Gem,
  Shirt,
  ShoppingBag,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Electronics",
    icon: <Laptop size={40} />,
  },
  {
    id: 2,
    title: "Jewelry",
    icon: <Gem size={40} />,
  },
  {
    id: 3,
    title: "Men's Clothing",
    icon: <Shirt size={40} />,
  },
  {
    id: 4,
    title: "Women's Clothing",
    icon: <ShoppingBag size={40} />,
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Shop By Category
        </h2>

        <p className="text-gray-500 mt-3">
          Browse products from your favorite categories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mb-5">
              {category.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;