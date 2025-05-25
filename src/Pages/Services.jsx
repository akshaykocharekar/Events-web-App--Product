import React from "react";
import Layout from "../Components/Layout";
import {
  FaBirthdayCake,
  FaBuilding,
  FaUserSecret,
  FaMapMarkedAlt,
  FaGuitar,
  FaHeart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const eventPlans = [
  {
    category: "PREMIUM",
    title: "Weddings",
    description:
      "Craft unforgettable moments with themed decor, catering, entertainment and venue management — all designed to match your dream day.",
    highlight: "Luxury & Elegance",
    color: "bg-[#C6F6D5]",
    icon: <FaHeart className="text-pink-600 text-3xl mb-3" />,
  },
  {
    category: "CLASSIC",
    title: "Corporate",
    description:
      "Host seamless conferences, product launches, and networking events with professional-grade planning and hospitality.",
    highlight: "Professional Impact",
    color: "bg-[#EDEDED]",
    icon: <FaBuilding className="text-blue-600 text-3xl mb-3" />,
  },
  {
    category: "TRENDING",
    title: "Birthdays",
    description:
      "From surprise themes to interactive party games and cakes — let us bring the celebration to life.",
    highlight: "Fun & Joy",
    color: "bg-[#E9D8FD]",
    icon: <FaBirthdayCake className="text-purple-600 text-3xl mb-3" />,
  },
  {
    category: "ESSENTIAL",
    title: "Private Events",
    description:
      "Baby showers, anniversaries, or any intimate gatherings — we customize everything to fit your vibe.",
    highlight: "Custom Experience",
    color: "bg-[#FEFCBF]",
    icon: <FaUserSecret className="text-yellow-700 text-3xl mb-3" />,
  },
  {
    category: "LUXURY",
    title: "Destination Events",
    description:
      "Travel and celebrate in style. We plan dream weddings and parties at exotic locations with full logistics support.",
    highlight: "Dream Locations",
    color: "bg-[#FFDAB9]",
    icon: <FaMapMarkedAlt className="text-orange-600 text-3xl mb-3" />,
  },
  {
    category: "MODERN",
    title: "Festivals & Concerts",
    description:
      "Stage setups, light shows, ticketing, artist coordination — your large-scale event handled like a pro.",
    highlight: "Crowd-Pleasing Execution",
    color: "bg-[#B2F5EA]",
    icon: <FaGuitar className="text-teal-600 text-3xl mb-3" />,
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="px-4 sm:px-6 py-12 text-center bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4 font-[Playfair_Display]">
            Celebrate Moments,{" "}
            <span className="text-pink-600">Make Memories Last</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Explore exclusive event packages — personalized and crafted just for
            your occasion.
          </p>
          <div className="mt-8">
            <button
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 transition text-white font-semibold shadow-lg w-45"
              style={{ borderRadius: "30px" }}
            ></button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 px-2">
          {eventPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 ${plan.color} shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between min-h-[320px] w-72`}
            >
              <div>
                {plan.icon}
                <span className="text-xs uppercase font-semibold tracking-widest text-gray-700 mb-2 inline-block">
                  {plan.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4">{plan.description}</p>
              </div>
              <div className="flex items-center text-sm font-semibold text-green-700">
                ✓ {plan.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
