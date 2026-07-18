import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <Truck size={35} />,
      title: "Fast Delivery",
      desc: "Get your orders delivered quickly and safely.",
    },
    {
      id: 2,
      icon: <ShieldCheck size={35} />,
      title: "Secure Payment",
      desc: "100% secure and trusted payment methods.",
    },
    {
      id: 3,
      icon: <RotateCcw size={35} />,
      title: "Easy Returns",
      desc: "Hassle-free returns within 7 days.",
    },
    {
      id: 4,
      icon: <Headphones size={35} />,
      title: "24/7 Support",
      desc: "We're always here to help you anytime.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          Why Choose <span className="text-lime-400">SkyMart?</span>
        </h2>

        <p className="text-zinc-400 mt-3">
          We provide the best shopping experience with premium services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

        {features.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center hover:border-lime-400 transition"
          >
            <div className="text-lime-400 flex justify-center mb-5">
              {item.icon}
            </div>

            <h3 className="text-white text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-zinc-400 mt-3 text-sm leading-6">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;