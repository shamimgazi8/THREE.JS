"use client";

import { useRef, useEffect, useState } from "react";
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
  const [leftPadding, setLeftPadding] = useState(0);

  useEffect(() => {
    // Calculate how much to pad-left to center the first slide
    const updatePadding = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const slideWidth = containerWidth * 0.85; // match min-w-[85%]
        const padding = (containerWidth - slideWidth) / 1;
        setLeftPadding(padding);
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);

    return () => window.removeEventListener("resize", updatePadding);
  }, []);

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
    <>
      <div className="relative text-white py-14 overflow-hidden">
        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex  overflow-x-hidden scroll-smooth snap-x snap-mandatory gap-5"
          style={{ paddingLeft: `${leftPadding}px`, paddingRight: "32px" }} // 32px right padding for arrow spacing
        >
          {slides.map((slide, index) => (
            <div key={index} className="snap-center">
              <div className="md:h-[580px] md:w-[560px] h-[280px] w-[260px] overflow-hidden  rounded-3xl relative">
                <Image
                  src={slide.img}
                  alt={`iPhone ${index + 1}`}
                  width={560}
                  height={580}
                  objectFit="contain"
                  className="rounded-xl"
                />
              </div>
              <p className="text-[18px] font-semibold mt-5 text-[#ebc9b6] text-start w-[70%]">
                {slide.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-end items-end w-[95%] gap-8">
        <button
          onClick={() => scroll("left")}
          className=" -translate-y-1/2 p-2.5 rounded-full bg-white/30 hover:bg-black transition z-10"
        >
          <IoChevronBack size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className=" -translate-y-1/2 p-2.5 rounded-full bg-white/30 hover:bg-black transition z-10"
        >
          <IoChevronForward size={20} />
        </button>
      </div>
    </>
  );
};

export default AppleCarousel;
