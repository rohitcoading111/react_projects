import { Laptop, Shirt, Sofa, Dumbbell } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Electronics",
      icon: <Laptop size={35} />,
    },
    {
      id: 2,
      title: "Fashion",
      icon: <Shirt size={35} />,
    },
    {
      id: 3,
      title: "Furniture",
      icon: <Sofa size={35} />,
    },
    {
      id: 4,
      title: "Sports",
      icon: <Dumbbell size={35} />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-white">
          Shop By <span className="text-lime-400">Category</span>
        </h2>

        <p className="text-zinc-400 mt-3">
          Explore products from your favourite categories.
        </p>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col items-center hover:border-lime-400 transition cursor-pointer"
          >

            <div className="text-lime-400 mb-4">
              {item.icon}
            </div>

            <h3 className="text-white text-lg font-semibold">
              {item.title}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Categories;