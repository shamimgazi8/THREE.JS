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
            Engineering and Components Section: <br />
            Built to Outlast and Outperform Body Copy Engineered with
            premium-grade components to deliver the control, speed, and
            durability expected from a{" "}
            <span className="font-semibold text-white">
              modern dual-sport electric bike.
            </span>{" "}
            Hydraulic suspension Chain drive system Dual hydraulic disc brakes
            Tubeless all-terrain tires
          </p>
        </div>

        {/* Right Column Text */}
        <div className="md:w-[30%]  text-center md:text-left">
          <p className="text-[20px] leading-relaxed text-white/50 font-semibold">
            Battery and Range Section Title Power That Lasts Body Copy Equipped
            with a high-capacity lithium-ion battery system, the O3 Pro delivers
            up to 75 miles per charge. Built for speed, range, and reliability.
            Removable battery 3.5-hour charge time Regenerative braking 1,000+
            charge cycles{" "}
            <span className="font-semibold text-white">
              highest strength-to-weight ratios
            </span>{" "}
            of any metal, making these models{" "}
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
            With a 33-inch seat height and lightweight chassis, the O3 series is
            balanced, agile, and built to handle both city streets and dirt
            trails.{" "}
            <span className="font-semibold text-white">
              120kg weight 33-inch seat height 220lbs max load Available
            </span>{" "}
            in Black, Red, or White
          </p>
        </div>

        {/* Right Column Text */}
        <div className="md:w-[30%]  text-center md:text-left">
          <p className="text-[20px] leading-relaxed text-white/50 font-semibold">
            Connect your ride with our Bluetooth app integration. Switch between
            ride modes, monitor stats, and customize performance on demand.
            <span className="font-semibold text-white">
              {" "}
              Digital LCD display Eco, Sport,
            </span>{" "}
            Boost modes Optional GPS Speed, battery, trip, and mode display
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
