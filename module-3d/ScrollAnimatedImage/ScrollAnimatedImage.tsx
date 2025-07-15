"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ScrollAnimatedImage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start when bottom hits viewport
  });

  // Reveal from left + fade in + zoom
  const scale = useTransform(scrollYProgress, [0.4, 0.5], [0.5, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0, 100], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, x: translateX, y: translateY }}
      className="w-full max-w-7xl mx-auto"
    >
      <Image
        src="/bike/remove1.png"
        alt="bike"
        height={1500}
        width={1900}
        className="object-cover w-full h-auto rounded-xl shadow-2xl"
      />
    </motion.div>
  );
};

export default ScrollAnimatedImage;
