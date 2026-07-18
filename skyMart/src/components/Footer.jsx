import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">


        <div>

          <h2 className="text-3xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h2>

          <p className="text-zinc-400 mt-4 leading-7">
            Your trusted online shopping destination for quality
            products at affordable prices.
          </p>

        </div>


        <div>

          <h3 className="text-white text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-zinc-400">

            <li className="hover:text-lime-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-lime-400 cursor-pointer">
              Shop
            </li>

            <li className="hover:text-lime-400 cursor-pointer">
              About
            </li>

          </ul>

        </div>


        <div>

          <h3 className="text-white text-xl font-semibold mb-5">
            Customer Care
          </h3>

          <ul className="space-y-3 text-zinc-400">

            <li>Help Center</li>

            <li>Privacy Policy</li>

            <li>Terms & Conditions</li>

          </ul>

        </div>


        <div>

          <h3 className="text-white text-xl font-semibold mb-5">
            Contact
          </h3>


          <div className="flex gap-4 mt-6">

            <div className="bg-zinc-900 p-3 rounded-full hover:bg-lime-400 hover:text-black transition cursor-pointer">
             <FaFacebookF size={20} />
            </div>

            <div className="bg-zinc-900 p-3 rounded-full hover:bg-lime-400 hover:text-black transition cursor-pointer">
            <FaInstagram size={20} />
            </div>

            <div className="bg-zinc-900 p-3 rounded-full hover:bg-lime-400 hover:text-black transition cursor-pointer">
             <FaTwitter size={20} />
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800 py-5 text-center text-zinc-500">

        © 2026 SkyMart. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;