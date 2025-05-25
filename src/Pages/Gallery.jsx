import React, { useEffect, useRef, useState } from "react";
import Layout from "../Components/Layout";
import Masonry from "../Components/Masonry";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1614662319640-8f7811f7e526?w=1920&auto=format&fit=crop&q=80",
    alt: "Destination Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&auto=format&fit=crop&q=80",
    alt: "Corporate Event",
  },
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&auto=format&fit=crop&q=80",
    alt: "Luxury Party Ambience",
  },
  {
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1920&auto=format&fit=crop&q=80",
    alt: "Beach Wedding",
  },
];

const masonryData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1614662319640-8f7811f7e526?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBmZXN0fGVufDB8fDB8fHww",
    height: 600,
  },

  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1727430256509-0f897d6f4765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc3RpbmF0aW9uJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    height: 900,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlJTIwZXZlbnRzfGVufDB8fDB8fHww",
    height: 500,
  },
  {
    id: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1682871360779-e8f1f77123ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBmZXN0fGVufDB8fDB8fHww",
    height: 400,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBmZXN0fGVufDB8fDB8fHww",
    height: 300,
  },
  {
    id: 9,
    image:
      "https://media.istockphoto.com/id/2182968225/photo/beautiful-beach-wedding-ceremony-setup-with-floral-decorations-and-white-chairs-near-the-ocean.webp?a=1&b=1&s=612x612&w=0&k=20&c=ggaGmryxp6O7MI3bHfyG0r_enbSUw_jl1DZqlmy8iH8=",
    height: 300,
  },
  {
    id: 10,
    image:
      "https://media.istockphoto.com/id/1170495743/photo/night-wedding-ceremony-with-arch-orchid-flowers-chairs-and-bulb-lights-in-forest-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=hg8BAu03BlTFOviSxeFdEdgz7GQgLhPoyWJHix-PX5Q=",
    height: 450,
  },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => resetTimeout();
  }, [index]);

  return (
    <Layout>
      {/* Carousel */}
      <div className="w-full overflow-hidden relative h-[300px] sm:h-[400px] lg:h-[500px] mb-10">
        <div
          className="whitespace-nowrap transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {carouselImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="inline-block w-full min-w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-pink-500" : "bg-gray-300"
              } transition duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-10">
        <h1 className="text-4xl italic font-normal text-gray-900 mb-4 font-[Playfair Display]">
          Story in Every Frame
        </h1>

        <p className="text-gray-600 text-md">
          Discover a curated collection of visuals that inspire, intrigue, and
          captivate. Each frame tells a story—immerse yourself in color, light,
          and creativity.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="px-4 max-w-7xl mx-auto">
        <Masonry data={masonryData} />
      </div>
    </Layout>
  );
};

export default Gallery;
