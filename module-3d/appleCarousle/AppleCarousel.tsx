"use client";

import { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";

const slides = [
  {
    img: "/placeholder.png",
    title: "iPhone 16 Pro Max has our largest iPhone display ever",
  },
  {
    img: "/placeholder.png",
    title: "The thinnest borders on any Apple product",
  },
  {
    img: "/placeholder.png",
    title: "Premium Grade 5 titanium is exceptionally durable",
  },
  {
    img: "/placeholder.png",
    title: "Four striking colors, from Black Titanium to new Desert Titanium",
  },
];

const AppleCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative text-white py-14 overflow-hidden">
      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory px-8"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-[85%] md:min-w-[50%] lg:min-w-[40%] snap-center p-3"
          >
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg bg-black">
              <Image
                src={slide.img}
                alt={`iPhone ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-base mt-5 text-gray-300 text-center">
              {slide.title}
            </p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black transition z-10"
      >
        <IoChevronBack size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black transition z-10"
      >
        <IoChevronForward size={20} />
      </button>
    </div>
  );
};

export default AppleCarousel;
