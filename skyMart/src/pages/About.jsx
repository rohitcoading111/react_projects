import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Users,
  Package,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/20 text-lime-400 px-4 py-2 rounded-full mb-6">
          <Zap size={17} />
          About SkyMart
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Shopping Made
          <span className="text-lime-400"> Simple.</span>
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
          SkyMart is a modern e-commerce platform designed to make online
          shopping simple, fast and convenient. Discover products across
          multiple categories and manage everything from one place.
        </p>

        <Link to="/shop">
          <button className="mt-8 bg-lime-400 text-black px-7 py-3 rounded-xl font-semibold hover:bg-lime-300 hover:scale-105 transition">
            Explore Products
          </button>
        </Link>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lime-400 font-semibold mb-3">
              OUR STORY
            </p>

            <h2 className="text-4xl font-bold">
              Built for a Better
              <span className="text-lime-400">
                {" "}Shopping Experience
              </span>
            </h2>

            <p className="text-zinc-400 mt-6 leading-8">
              SkyMart brings different product categories together in one
              clean and easy-to-use platform. Our goal is to provide users
              with a smooth experience from discovering a product to adding
              it to their cart.
            </p>

            <p className="text-zinc-400 mt-4 leading-8">
              With product search, category filters, detailed product
              information and an easy-to-manage shopping cart, SkyMart makes
              finding the right product easier.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center mb-6">
              <ShoppingBag size={32} className="text-black" />
            </div>

            <h3 className="text-2xl font-bold">
              Why SkyMart?
            </h3>

            <p className="text-zinc-400 mt-4 leading-7">
              A simple, responsive and modern shopping experience focused
              on usability, product discovery and convenience.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-lime-400 font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Everything You Need
          </h2>

          <p className="text-zinc-400 mt-3">
            Designed to make your shopping experience smooth and simple.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Package size={28} />}
            title="Quality Products"
            description="Explore products from multiple popular categories."
          />

          <FeatureCard
            icon={<Truck size={28} />}
            title="Fast Shopping"
            description="Find and explore products quickly with an easy interface."
          />

          <FeatureCard
            icon={<ShieldCheck size={28} />}
            title="Secure Experience"
            description="A clean and reliable shopping experience for users."
          />

          <FeatureCard
            icon={<RotateCcw size={28} />}
            title="Easy Cart"
            description="Add, remove and manage product quantities with ease."
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat
              icon={<Package />}
              number="20+"
              title="Products"
            />

            <Stat
              icon={<Users />}
              number="500+"
              title="Customers"
            />

            <Stat
              icon={<ShoppingBag />}
              number="850+"
              title="Orders"
            />

            <Stat
              icon={<Star />}
              number="4.9"
              title="Rating"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-lime-400 rounded-3xl px-8 py-14 text-center text-black">
          <h2 className="text-4xl font-bold">
            Ready to Start Shopping?
          </h2>

          <p className="mt-3 text-black/70">
            Explore SkyMart and discover products that match your needs.
          </p>

          <Link to="/shop">
            <button className="mt-7 bg-black text-white px-7 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-lime-400 hover:-translate-y-1 transition duration-300">
      <div className="w-12 h-12 bg-lime-400/10 text-lime-400 rounded-xl flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mt-5">
        {title}
      </h3>

      <p className="text-zinc-400 mt-3 leading-6">
        {description}
      </p>
    </div>
  );
};

const Stat = ({ icon, number, title }) => {
  return (
    <div>
      <div className="text-lime-400 flex justify-center mb-3">
        {icon}
      </div>

      <h3 className="text-3xl font-bold">
        {number}
      </h3>

      <p className="text-zinc-400 mt-1">
        {title}
      </p>
    </div>
  );
};

export default About;