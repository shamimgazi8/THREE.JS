"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import ColorDot from "./ColorDot";
import SizeSelector from "./SizeSelector";
import { motion, useInView, Variants } from "framer-motion";
import * as THREE from "three";

interface IphoneModelProps {
  hideControls?: boolean;
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
  const gltf = useGLTF("/iphone-16-free/source/iphone.glb");
  const modelRef = useRef<THREE.Group>(null);
  const rotatedRef = useRef(false);

  useEffect(() => {
    // Reset rotation state when triggerRotation toggles true
    if (triggerRotation) {
      rotatedRef.current = false;
      if (modelRef.current) {
        modelRef.current.rotation.y = 0;
      }
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
      position={[0, -0.2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function IphoneModel({ hideControls }: IphoneModelProps) {
  const [scale, setScale] = useState(2.5);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState("6.3");

  const canvasContainerRef = useRef(null);
  const isInView = useInView(canvasContainerRef, {
    margin: "-100px",
    once: false,
  });

  // Control to trigger rotation each time model comes into view
  const [triggerRotation, setTriggerRotation] = useState(false);

  // When isInView changes, toggle triggerRotation
  useEffect(() => {
    if (isInView && !hideControls) {
      setTriggerRotation(true);
    } else {
      setTriggerRotation(false);
    }
  }, [isInView, hideControls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
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
      transition: {
        type: "spring" as const,
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 640) setScale(1);
      else if (width < 1024) setScale(1);
      else setScale(1);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white relative p-10">
      <h1 className="text-[32px] sm:text-[56px] font-semibold pt-8 ml-[80px]">
        Take a closer look.
      </h1>

      <div className="h-[80%]" ref={canvasContainerRef}>
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 4, 4]} intensity={2} />
          <Environment preset="night" />
          <Suspense fallback={null}>
            <Model
              scale={scale}
              triggerRotation={triggerRotation}
              onRotateComplete={() => {
                // Optional: could do something on complete
              }}
            />
          </Suspense>
          <OrbitControls enableZoom={false} target={[0, 0, 0]} />
        </Canvas>
      </div>

      <motion.div
        variants={containerVariants}
        initial="visible"
        animate={hideControls ? "hidden" : "visible"}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4 z-40"
      >
        <p className="text-center text-sm mb-2">
          {selectedSize}&quot; iPhone 16 Pro in {selectedColor.name}
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

          <motion.div variants={itemVariants}>
            <SizeSelector
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
