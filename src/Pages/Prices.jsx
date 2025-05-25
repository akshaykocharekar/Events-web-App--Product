import React from "react";
import Layout from "../Components/Layout";
import { motion } from "framer-motion";
import ShinyText from "../Components/ShinyText";

const plans = [
  {
    title: "Starter",
    description: "Perfect for small events or personal functions.",
    price: "$500 /event",
    features: [
      "1-day event support",
      "Venue assistance",
      "Basic decorations",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    title: "Pro",
    description: "For mid-sized events like engagements or birthdays.",
    price: "$1200 /event",
    features: [
      "2-3 day planning",
      "Customized decor",
      "On-site support",
      "Vendor coordination",
    ],
    cta: "Get Started",
  },
  {
    title: "Elite",
    description: "Ideal for premium events and weddings.",
    price: "$2500 /event",
    features: [
      "Full event management",
      "Theme-based planning",
      "Live entertainment",
      "Guest handling",
    ],
    cta: "Get Started",
  },
  {
    title: "Custom",
    description: "Need something special? Let’s craft your experience.",
    price: "Let's Talk!",
    features: [
      "Strategy planning",
      "Multi-day event",
      "Advanced logistics",
      "24/7 priority support",
    ],
    cta: "Book a Call",
  },
];

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <ShinyText
              text="Our Pricing Plans"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h1>
          <p className="text-black text-lg">
            Tailored packages for all kinds of events. Pick what fits you best
            or customize your own.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                {plan.title}
              </h3>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {plan.price}
              </h2>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-700">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
