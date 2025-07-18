"use client";

import { useEffect, useRef, useState } from "react";
import IphoneModel from "@/module-3d/Model3d";
import HeroText from "@/module-3d/text effect/Textcompo";
import GradientText from "@/module-3d/text effect/GradientText";
import Image from "next/image";
import DetailsSection from "@/module-3d/DetailsSection/DetailsSections";
import ProductivityTabsSection from "@/module-3d/TabSection/ProductTabSection";
import CompareSection from "@/module-3d/CompareSection/CompareSection";
import AdvertisementPro from "@/module-3d/Advertisement/ProAdvertisement";
import ScrollAnimatedImage from "@/module-3d/ScrollAnimatedImage/ScrollAnimatedImage";
import Model3d from "@/module-3d/Model3d";

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
        <Model3d
          hideControls={hideControls}
          initialScale={0.02}
          cameraPositionZ={25}
        />
        {/* <div className="h-screen w-full bg-[url('/bike/bike_golden_1.png')] bg-cover bg-center"></div> */}
      </section>

      {/* Section 2 */}
      <section className="mt-[200px]">
        <div className="flex justify-center items-center flex-col text-center md:text-left">
          <GradientText text={"The O3 Series"} />
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold">
            Ride the Future
          </h1>
          <ScrollAnimatedImage />
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
        <div className="w-full md:mt-[100px]">
          <Image
            src="/bike/remove.png"
            alt="bike image without bg"
            width={1900}
            height={800}
            className="object-cover md:translate-x-[150px] translate-x-[50px] w-full h-auto"
          />
        </div>
      </section>

      <section className=" min-h-screen bg-gradient-to-t from-[#1d1d1f] to-transparent">
        <ProductivityTabsSection />
      </section>
      <section className=" bg-[#1d1d1f] md:p-10 p-2">
        <div className=" w-[80%] m-auto">
          <h1 className=" md:text-5xl text-2xl 5 mb-10 font-semibold ">
            Keep exploring O3 & O3 PRO.
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
