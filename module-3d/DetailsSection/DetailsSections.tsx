"use client";

import Image from "next/image";
import AppleCarousel from "../appleCarousle/AppleCarousel";

const DetailsSection = () => {
  return (
    <div className=" text-white ">
      {/* Top Text Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Left Column Text */}
        <div className="mx-auto md:mx-0 md:w-[70%] text-center md:text-left">
          <p className="text-[20px] leading-relaxed text-white/50 font-semibold">
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
        <div className="mx-auto md:mx-0 md:w-[70%] text-center md:text-left">
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-[50px]">
        {/* Left Column Text */}
        <div className="mx-auto md:mx-0 md:w-[70%] text-center md:text-left">
          <p className="text-[20px] leading-relaxed text-white/50 font-semibold">
            New display technology allows us to route display data under active
            pixels with no distortion, resulting in thinner borders for larger
            6.3-inch and 6.9-inch{" "}
            <span className="font-semibold text-white">
              Super Retina XDR displays
            </span>{" "}
            that feel great in your hand.
          </p>
        </div>

        {/* Right Column Text */}
        <div className="mx-auto md:mx-0 md:w-[70%] text-center md:text-left ">
          <p className="text-[20px] leading-relaxed text-white/50 font-semibold">
            iPhone 16 Pro is splash, water, and dust resistant.⁴ It also has our
            latest-generation Ceramic Shield material that’s{" "}
            <span className="font-semibold text-white">
              two times tougher than any smartphone glass.
            </span>{" "}
            Talk about durable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
