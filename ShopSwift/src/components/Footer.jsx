import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-violet-500">ShopSwift</h2>
          <p className="text-gray-400 mt-4">
            Premium shopping experience with the latest products.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Categories</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Electronics</li>
            <li>Jewelry</li>
            <li>Men s Clothing</li>
            <li>Women s Clothing</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaFacebookF size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaInstagram size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaTwitter size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <FaGithub size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 ShopSwift. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
