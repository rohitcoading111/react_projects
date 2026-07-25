import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: <Truck size={40} />,
    title: "Free Shipping",
    desc: "Free shipping on all orders over $50.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Secure Payment",
    desc: "100% secure payment with trusted gateways.",
  },
  {
    icon: <RefreshCcw size={40} />,
    title: "Easy Returns",
    desc: "30-day easy return policy.",
  },
  {
    icon: <Headphones size={40} />,
    title: "24/7 Support",
    desc: "Friendly customer support anytime.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-violet-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Shop With Us?
          </h2>

          <p className="text-gray-500 mt-3">
            We provide the best shopping experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-violet-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;