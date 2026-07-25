import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <FiSearch
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        type="text"
        placeholder="Search products..."
        className="w-full py-4 pl-12 pr-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>
  );
};

export default SearchBar;