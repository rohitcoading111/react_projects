const CategoryFilter = () => {
  return (
    <select className="w-full md:w-64 py-4 px-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500">
      <option>All Categories</option>
      <option>Electronics</option>
      <option>Jewelry</option>
      <option>Men's Clothing</option>
      <option>Women's Clothing</option>
    </select>
  );
};

export default CategoryFilter;