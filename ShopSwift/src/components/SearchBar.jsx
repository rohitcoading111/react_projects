import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/filterSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);

  return (
    <div className="relative w-full sm:w-80 md:w-96">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search products..."
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition text-sm sm:text-base"
      />
    </div>
  );
};

export default SearchBar;