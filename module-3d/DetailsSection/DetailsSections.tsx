"use client";

import Image from "next/image";
import AppleCarousel from "../appleCarousle/AppleCarousel";

const DetailsSection = () => {
  return (
    <div className=" text-white ">
      {/* Top Text Columns */}
      <div className=" md:flex block justify-around gap-8 mb-16 w-[80%] m-auto">
        {/* Left Column Text */}
        <div className="md:w-[30%] text-center md:text-left">
          <p className="md:text-[20px] leading-relaxed text-white/50 font-semibold">
            iPhone 16 Pro features a Grade 5 titanium design with a new, refined
            brushed texture. Titanium has one of the highest strength-to-weight
            ratios of any metal, making these models{" "}
            <span className="font-semibold text-white">
              incredibly strong and impressively light
            </span>
            . iPhone 16 Pro comes in four stunning finishes — including new
            Desert Titanium.
          </p>
        </div>

        {/* Right Column Text */}
        <div className="md:w-[30%]  text-center md:text-left">
          <p className="text-[20px] leading-relaxed text-white/50 font-semibold">
            Internal design improvements — including a 100 percent recycled
            aluminum thermal substructure and back glass optimizations that
            further dissipate heat — enable up to 20 percent{" "}
            <span className="font-semibold text-white">
              better sustained performance
            </span>{" "}
            than iPhone 15 Pro. So you can do all the things you love — like
            high-intensity gaming — for longer.
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full">
        <AppleCarousel />
      </div>
      <div className=" md:flex block justify-around gap-8 mb-16 w-[80%] m-auto">
        {/* Left Column Text */}
        <div className="md:w-[30%] text-center md:text-left">
          <p className="md:text-[20px] leading-relaxed text-white/50 font-semibold">
            iPhone 16 Pro features a Grade 5 titanium design with a new, refined
            brushed texture. Titanium has one of the highest strength-to-weight
            ratios of any metal, making these models{" "}
            <span className="font-semibold text-white">
              incredibly strong and impressively light
            </span>
            . iPhone 16 Pro comes in four stunning finishes — including new
            Desert Titanium.
          </p>
        </div>

        {/* Right Column Text */}
        <div className="md:w-[30%]  text-center md:text-left">
          <p className="text-[20px] leading-relaxed text-white/50 font-semibold">
            Internal design improvements — including a 100 percent recycled
            aluminum thermal substructure and back glass optimizations that
            further dissipate heat — enable up to 20 percent{" "}
            <span className="font-semibold text-white">
              better sustained performance
            </span>{" "}
            than iPhone 15 Pro. So you can do all the things you love — like
            high-intensity gaming — for longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
