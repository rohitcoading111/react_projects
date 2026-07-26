import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/filterSlice";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.filter);

  return (
    <select
      value={category}
      onChange={(e) => dispatch(setCategory(e.target.value))}
      className="px-5 py-3 rounded-xl border border-gray-300 bg-white shadow-sm outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
    >
      <option value="all">📦 All Categories</option>
      <option value="electronics">💻 Electronics</option>
      <option value="jewelery">💎 Jewelery</option>
      <option value="men's clothing">👕 Men's Clothing</option>
      <option value="women's clothing">👗 Women's Clothing</option>
    </select>
  );
};

export default CategoryFilter;