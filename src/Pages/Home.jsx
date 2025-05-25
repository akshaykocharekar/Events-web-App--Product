import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatedTestimonials } from "../Components/AnimatedTestimonials";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../components/TypewriterEffect";

const words = [
  { text: "Celebrate" },
  { text: "Life's" },
  { text: "Finest" },
  { text: "Moments", className: "text-pink-500 dark:text-pink-400" },
];
const testimonials = [
  {
    quote:
      "Their attention to every little detail made our event absolutely perfect. Their creativity truly won everyone's hearts!",
    name: "Amit Sharma",
    designation: "Event Organizer, Mumbai Weddings",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Our corporate summit went very smoothly and successfully thanks to their excellent service. Every staff member was professional and courteous.",
    name: "Priya Desai",
    designation: "HR Head, Tech Solutions Pvt Ltd",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "From planning to execution of our wedding ceremony, everything was handled beautifully and impressively. Thanks to the whole team!",
    name: "Rohit Verma",
    designation: "Bride’s Father, Delhi",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The festival decoration and management were absolutely outstanding. We felt so relaxed even during such a large event, all credit to their team.",
    name: "Sunita Rao",
    designation: "Festival Coordinator, Bengaluru",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The quality of their work and time management impressed us greatly. We will definitely work with them again for our next event.",
    name: "Karan Singh",
    designation: "Marketing Manager, Delhi Events Co.",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[450px] flex flex-col justify-center items-center px-4 md:px-8 py-10 text-center ">
        <h1
          className="font-serif font-semibold mb-6 drop-shadow-sm"
          style={{ fontSize: "4rem" }}
        >
          <TypewriterEffectSmooth
            words={words}
            className="font-uk italic font-semibold text-center text-[#2b2825] text-3xl"
            style={{ fontSize: "4rem" }}
            cursorClassName="bg-pink-500"
          />
        </h1>

        <p className="max-w-md md:max-w-xl text-base md:text-lg mb-8 leading-relaxed">
          Expertly crafted events with elegance, precision, and passion —
          because every occasion deserves to be unforgettable.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-md mx-auto">
          <NavLink
            to="/gallery"
            className="w-full md:w-auto text-center px-6 py-3 text-sm md:text-base bg-[#FF6E9B] text-white font-medium rounded-full shadow-md hover:bg-pink-600 transition"
          >
            View Gallery
          </NavLink>

          <NavLink
            to="/services"
            className="w-full md:w-auto text-center px-6 py-3 text-sm md:text-base border-2 border-[#FF6E9B] text-[#FF6E9B] font-medium rounded-full hover:bg-[#FF6E9B] hover:text-white transition"
          >
            Explore Services
          </NavLink>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-[#f9fafb] py-4 px-4">
        <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
      </section>

      {/* Google Map */}
      <div>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.7173480106777!2d73.95922481482653!3d15.250496589368872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf6197c33f7c05%3A0x3f90b233b829da24!2sCarmona%2C%20Margao%2C%20Goa%2C%20India!5e0!3m2!1sen!2sin!4v1685020000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Home;
