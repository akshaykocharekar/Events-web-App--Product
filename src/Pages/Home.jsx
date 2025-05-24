import React from "react";
import Layout from "../Components/Layout";

import SplitText from "../Components/SplitText";
import ShinyText from "../Components/ShinyText";
import { NavLink } from "react-router-dom";
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[450px] flex flex-col justify-center items-center px-4 md:px-8 py-10 text-center bg-gradient-to-br from-[#31eddb] via-[#eeebed] to-[#dfe9f3]">
        <h1 className="text-3xl md:text-5xl font-serif font-semibold mb-6 drop-shadow-sm">
          <SplitText
            text="Celebrate Life's Finest Moments"
            className="text-3xl md:text-5xl font-semibold text-center"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h1>

        <p className="max-w-md md:max-w-xl text-base md:text-lg mb-8 leading-relaxed ">
          <ShinyText
            text="Expertly crafted events with elegance, precision, and passion — because every occasion deserves to be unforgettable."
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
          <NavLink
            to="/gallery"
            className="px-6 py-3 text-sm md:text-base bg-[#FF6E9B] text-white font-medium rounded-full shadow-md hover:bg-pink-600 transition"
          >
            View Gallery
          </NavLink>

          <NavLink
            to="/services"
            className="px-6 py-3 text-sm md:text-base border-2 border-[#FF6E9B] text-[#FF6E9B] font-medium rounded-full hover:bg-[#FF6E9B] hover:text-white transition"
          >
            Explore Services
          </NavLink>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center text-[#4b3e2b]">
        <h2 className="text-3xl font-serif font-semibold mb-6">
          Why Choose Cerion?
        </h2>
        <p className="leading-relaxed text-lg font-light max-w-3xl mx-auto">
          We combine refined creativity with meticulous planning to craft events
          that are both breathtaking and flawlessly executed. From intimate
          gatherings to grand celebrations, Cerion brings your vision to life
          with unmatched passion and precision.
        </p>
      </section>
    </Layout>
  );
};

export default Home;
