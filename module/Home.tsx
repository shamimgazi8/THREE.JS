"use client";

import { useEffect, useRef, useState } from "react";
import IphoneModel from "@/module-3d/IphoneModel";
import HeroText from "@/module-3d/text effect/Textcompo";

const Home = () => {
  const secondSectionRef = useRef<HTMLDivElement | null>(null);
  const [hideControls, setHideControls] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideControls(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section>
        {/* Section 1: iPhone Model */}
        <IphoneModel hideControls={hideControls} />
      </section>

      <section ref={secondSectionRef}>
        {/* Section 2: Hero Text */}
        <HeroText />
      </section>
    </>
  );
};

export default Home;
