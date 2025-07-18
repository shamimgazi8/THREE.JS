"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import ColorDot from "./ColorDot";
import { motion, useInView, Variants } from "framer-motion";
import * as THREE from "three";

interface Model3dProps {
  hideControls?: boolean;
  initialScale?: number;
  cameraPositionZ?: number;
}

const colorOptions = [
  { color: "#A29582", name: "Natural Titanium" },
  { color: "#F3F3F3", name: "White Titanium" },
  { color: "#1C1C1E", name: "Black Titanium" },
  { color: "#4F352D", name: "Blue Titanium" },
];

function Model({
  scale,
  triggerRotation,
  onRotateComplete,
}: {
  scale: number;
  triggerRotation: boolean;
  onRotateComplete: () => void;
}) {
  const gltf = useGLTF("/bike/bike3d.glb");
  const modelRef = useRef<THREE.Group>(null);
  const rotatedRef = useRef(false);

  useEffect(() => {
    if (triggerRotation) {
      rotatedRef.current = false;
      if (modelRef.current) modelRef.current.rotation.y = 0;
    }
  }, [triggerRotation]);

  useFrame((_, delta) => {
    if (modelRef.current && triggerRotation && !rotatedRef.current) {
      const speed = 1.5;
      const targetY = Math.PI / 1.2;
      if (modelRef.current.rotation.y < targetY) {
        modelRef.current.rotation.y += delta * speed;
      } else {
        modelRef.current.rotation.y = targetY;
        rotatedRef.current = true;
        onRotateComplete();
      }
    }
  });

  return (
    <primitive
      object={gltf.scene}
      ref={modelRef}
      scale={scale}
      position={[0, -1, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function Model3d({
  hideControls,
  initialScale = 0.04,
  cameraPositionZ = 18,
}: Model3dProps) {
  const [scale, setScale] = useState(initialScale);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const canvasContainerRef = useRef(null);
  const isInView = useInView(canvasContainerRef, {
    margin: "-100px",
    once: false,
  });

  const [triggerRotation, setTriggerRotation] = useState(false);
  const [envLoaded, setEnvLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hideControls) {
      setTriggerRotation(true);
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => setEnvLoaded(true));
      } else {
        setTimeout(() => setEnvLoaded(true), 2000);
      }
    } else {
      setTriggerRotation(false);
      setEnvLoaded(false);
    }
  }, [isInView, hideControls]);

  useGLTF.preload("/bike/bike3d.glb");

  useEffect(() => {
    const baseScale = initialScale;
    const handleResize = () => {
      const width = window.innerWidth;
      let newScale = baseScale;
      if (width < 480) newScale = baseScale * 0.5;
      else if (width < 768) newScale = baseScale * 0.7;
      else if (width < 1024) newScale = baseScale * 0.85;
      setScale(newScale);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialScale]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white relative p-4 sm:p-10">
      <h1 className="text-[28px] sm:text-[48px] font-semibold pt-4 sm:pt-8 ml-4 sm:ml-[80px]">
        Take a closer look.
      </h1>

      <div className="h-[75%]" ref={canvasContainerRef}>
        {isInView && (
          <Canvas
            camera={{ position: [0, 0, cameraPositionZ], fov: 45 }}
            dpr={[1, 2]}
            shadows
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 4, 4]} intensity={2} />

            <Suspense
              fallback={
                <Html>
                  <div className="flex items-center justify-center h-full w-full mb-5">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900" />
                  </div>
                  Loading...
                </Html>
              }
            >
              <Model
                scale={scale}
                triggerRotation={triggerRotation}
                onRotateComplete={() => {}}
              />
            </Suspense>

            {envLoaded && (
              <Suspense fallback={null}>
                <Environment
                  files="/hdr/dikhololo_night_1k.hdr"
                  background={false}
                />
              </Suspense>
            )}

            <OrbitControls enableZoom={false} target={[0, 0, 0]} />
          </Canvas>
        )}
      </div>

      {!hideControls && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4 z-40"
        >
          <p className="text-center text-sm mb-2">
            BRAX O3 16 in {selectedColor.name}
          </p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="flex gap-3 bg-neutral-900 px-4 py-4 rounded-full"
            >
              {colorOptions.map((color, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => setSelectedColor(color)}
                  style={{ cursor: "pointer" }}
                >
                  <ColorDot
                    color={color.color}
                    selected={selectedColor.color === color.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
