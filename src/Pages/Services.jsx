import React from "react";
import Layout from "../Components/Layout";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const eventPlans = [
  {
    category: "PREMIUM",
    title: "Weddings",
    description:
      "Craft unforgettable moments with themed decor, catering, and venue management.",
    highlight: "Luxury & Elegance",
    color: "bg-[#C6F6D5]",
  },
  {
    category: "CLASSIC",
    title: "Corporate",
    description:
      "Host seamless conferences, product launches, and networking events.",
    highlight: "Professional Impact",
    color: "bg-[#EDEDED]",
  },
  {
    category: "TRENDING",
    title: "Birthdays",
    description: "Surprise themes, party games, and cakes — all handled by us!",
    highlight: "Fun & Joy",
    color: "bg-[#E9D8FD]",
  },
  {
    category: "ESSENTIAL",
    title: "Private Events",
    description:
      "From baby showers to anniversaries — tailor-made and intimate.",
    highlight: "Custom Experience",
    color: "bg-[#FEFCBF]",
  },
];

const pricingPlans = [
  {
    title: "Basic",
    price: "$0",
    description: "For personal celebrations and simple event coordination.",
    features: ["Up to 50 guests", "Basic decor & music", "Email support"],
    button: "Get started",
    color: "bg-gradient-to-br from-[#292929] to-[#1c1c1c]",
  },
  {
    title: "Premium",
    price: "$499",
    description: "Ideal for weddings, corporate events, and themed parties.",
    features: [
      "Unlimited guests",
      "Custom themes",
      "Premium venues",
      "Priority support",
    ],
    button: "Get started",
    popular: true,
    color: "bg-gradient-to-br from-[#9333EA] to-[#6B21A8]",
  },
  {
    title: "Enterprise",
    price: "Contact us",
    description: "Tailored for large-scale or multi-day events.",
    features: [
      "Dedicated event manager",
      "On-site staff",
      "Custom deployment",
      "Advanced logistics",
    ],
    button: "Contact sales",
    color: "bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Celebrate Moments, Make Memories Last.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get exclusive offers on our premium event packages — tailored for your
          occasion.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <button className="px-6 py-3 bg-black text-white rounded-full font-medium">
            Get In Touch
          </button>
        </div>

        {/* Event Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {eventPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-sm ${plan.color} text-left flex flex-col justify-between h-56`}
            >
              <span className="text-xs uppercase font-semibold tracking-wide text-gray-700">
                {plan.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                {plan.title}
              </h2>
              <p className="text-sm text-gray-700 flex-grow">
                {plan.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-sm font-semibold text-gray-800">
                {plan.highlight}
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <h2 className="text-4xl font-bold mb-4 text-white bg-gradient-to-r from-purple-400 to-pink-600 inline-block px-4 py-2 rounded-lg">
          Choose your plan
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          Unlock endless possibilities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${plan.color} relative shadow-lg flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-white text-black text-xs px-2 py-1 rounded-full font-bold">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <p className="text-sm mb-4">{plan.description}</p>
              <ul className="text-sm space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-300" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-black px-4 py-2 rounded-full font-semibold mt-auto">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
