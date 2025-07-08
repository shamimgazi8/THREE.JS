import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Props {
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

export default function SizeSelector({ selectedSize, onSelectSize }: Props) {
  const sizes = ["6.3", "6.9"];
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightProps, setHighlightProps] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  // Update the highlight position when selectedSize changes
  useEffect(() => {
    if (!containerRef.current) return;

    const buttons = containerRef.current.querySelectorAll("button");
    buttons.forEach((btn) => {
      if ((btn as HTMLButtonElement).textContent?.includes(selectedSize)) {
        const rect = btn.getBoundingClientRect();
        const parentRect = containerRef.current!.getBoundingClientRect();

        setHighlightProps({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    });
  }, [selectedSize]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-2 bg-neutral-900 px-1 py-1 rounded-full"
      style={{ userSelect: "none" }}
    >
      {/* Sliding highlight */}
      <motion.div
        className="absolute top-1 left-0 bottom-1 bg-white rounded-full"
        style={{ width: highlightProps.width, left: highlightProps.left }}
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Buttons */}
      {sizes.map((size) => {
        const isSelected = selectedSize === size;
        return (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className={`relative z-10 text-sm px-3 py-1 rounded-full h-[52px] w-[52px] ${
              isSelected ? "text-black font-semibold" : "text-white"
            }`}
          >
            {size}&quot;
          </button>
        );
      })}
    </div>
  );
}
