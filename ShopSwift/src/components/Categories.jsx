import {
  Laptop,
  Gem,
  Shirt,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/filterSlice";

const categories = [
  {
    id: 1,
    title: "Smartphones",
    value: "smartphones",
    icon: <Laptop size={40} />,
  },
  {
    id: 2,
    title: "Beauty",
    value: "beauty",
    icon: <Gem size={40} />,
  },
  {
    id: 3,
    title: "Mens Shirts",
    value: "mens-shirts",
    icon: <Shirt size={40} />,
  },
  {
    id: 4,
    title: "Womens Dresses",
    value: "womens-dresses",
    icon: <ShoppingBag size={40} />,
  },
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16 lg:py-20">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Shop By Category
        </h2>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Browse products from your favorite categories.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => {
              dispatch(setCategory(category.value));
              navigate("/products");
            }}
            className="bg-white rounded-2xl shadow-md p-5 sm:p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mb-4 sm:mb-5">
              {category.icon}
            </div>

            <h3 className="text-base sm:text-xl font-semibold text-center">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;