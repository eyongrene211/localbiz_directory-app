"use client";
import React, { useRef }             from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ items }) => {
  const scrollRef = useRef(null);

  // scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar px-10"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] max-w-[250px] bg-white shadow-md rounded-xl p-4 flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="mt-3 font-semibold text-lg text-gray-800">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;


