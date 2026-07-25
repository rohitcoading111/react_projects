const SortDropdown = () => {
  return (
    <select className="w-full md:w-56 py-4 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500">
      <option>Sort By</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
      <option>Highest Rated</option>
      <option>Newest</option>
    </select>
  );
};

export default SortDropdown;