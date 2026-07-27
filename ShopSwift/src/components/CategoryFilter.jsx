import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/filterSlice";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.filter);

  return (
    <select
      value={category}
      onChange={(e) => dispatch(setCategory(e.target.value))}
      className="w-full sm:w-64 md:w-72 px-4 sm:px-5 py-3 rounded-xl border border-gray-300 bg-white shadow-sm outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition text-sm sm:text-base"
    >
      <option value="all">📦 All Categories</option>

      <option value="smartphones">📱 Smartphones</option>
      <option value="laptops">💻 Laptops</option>
      <option value="tablets">📟 Tablets</option>

      <option value="beauty">💄 Beauty</option>
      <option value="fragrances">🌸 Fragrances</option>
      <option value="skin-care">🧴 Skin Care</option>

      <option value="furniture">🛋 Furniture</option>
      <option value="home-decoration">🏠 Home Decoration</option>
      <option value="kitchen-accessories">🍽 Kitchen Accessories</option>

      <option value="groceries">🛒 Groceries</option>

      <option value="mens-shirts">👕 Men's Shirts</option>
      <option value="mens-shoes">👟 Men's Shoes</option>
      <option value="mens-watches">⌚ Men's Watches</option>

      <option value="womens-dresses">👗 Women's Dresses</option>
      <option value="womens-shoes">👠 Women's Shoes</option>
      <option value="womens-watches">⌚ Women's Watches</option>
      <option value="womens-bags">👜 Women's Bags</option>
      <option value="womens-jewellery">💍 Women's Jewellery</option>

      <option value="mobile-accessories">🎧 Mobile Accessories</option>
      <option value="sports-accessories">⚽ Sports Accessories</option>

      <option value="motorcycle">🏍 Motorcycle</option>
      <option value="vehicle">🚗 Vehicle</option>

      <option value="sunglasses">🕶 Sunglasses</option>
      <option value="tops">👚 Tops</option>
    </select>
  );
};

export default CategoryFilter;