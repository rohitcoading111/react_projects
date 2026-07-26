import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/filterSlice";

const SortDropdown = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filter);

  return (
    <select
      value={sort}
      onChange={(e) => dispatch(setSort(e.target.value))}
      className="px-5 py-3 rounded-xl border border-gray-300 bg-white shadow-sm outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
    >
      <option value="default">⭐ Default</option>
      <option value="low">⬆️ Price : Low to High</option>
      <option value="high">⬇️ Price : High to Low</option>
      <option value="rating">🔥 Highest Rated</option>
    </select>
  );
};

export default SortDropdown;