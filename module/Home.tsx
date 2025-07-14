"use client";

import { useEffect, useRef, useState } from "react";
import IphoneModel from "@/module-3d/IphoneModel";
import HeroText from "@/module-3d/text effect/Textcompo";
import GradientText from "@/module-3d/text effect/GradientText";
import Image from "next/image";
import DetailsSection from "@/module-3d/DetailsSection/DetailsSections";
import ProductivityTabsSection from "@/module-3d/TabSection/ProductTabSection";
import CompareSection from "@/module-3d/CompareSection/CompareSection";
import AdvertisementPro from "@/module-3d/Advertisement/ProAdvertisement";

const Home = () => {
  const firstSectionRef = useRef<HTMLElement | null>(null);
  const [hideControls, setHideControls] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the first section is NOT intersecting, we hide controls
        setHideControls(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (firstSectionRef.current) {
      observer.observe(firstSectionRef.current);
    }

    return () => {
      if (firstSectionRef.current) {
        observer.unobserve(firstSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Section 1: iPhone Model */}
      <section ref={firstSectionRef}>
        <IphoneModel hideControls={hideControls} />
      </section>

      {/* Section 2 */}
      <section className="mt-[200px]">
        <div className="flex justify-center items-center flex-col text-center md:text-left">
          <GradientText text={"Apple Intelligence."} />
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold">
            AI-opening possibilities
          </h1>
          <div className="mt-[100px]">
            <Image
              src={"/iphone-hand.png"}
              alt="iphone cover"
              height={800}
              width={800}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className=" mt-[200px]">
        <div className="relative bg-black overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_120%_80%_at_center,_rgba(34,25,20,1.25)_0%,_black_60%)]" />
          <div className="relative z-10">
            <DetailsSection />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="flex justify-center items-center flex-col w-[85%] m-auto mt-15">
        <HeroText />

        <div className="w-full mt-[100px]">
          <Image
            src={"/iphone-cover.png"}
            alt="iphone cover"
            width={1900}
            height={800}
            className="object-cover"
            layout="responsive"
          />
        </div>
      </section>

      <section className=" min-h-screen bg-gradient-to-t from-[#1d1d1f] to-transparent">
        <ProductivityTabsSection />
      </section>
      <section className=" bg-[#1d1d1f] md:p-10 p-2">
        <div className=" w-[80%] m-auto">
          <h1 className=" md:text-5xl text-2xl 5 mb-10 font-semibold ">
            Keep exploring iPhone.
          </h1>
        </div>
        <CompareSection />
      </section>
      <section>
        <AdvertisementPro />
      </section>
    </>
  );
};

export default Home;
