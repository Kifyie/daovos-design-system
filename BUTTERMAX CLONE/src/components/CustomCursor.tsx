"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hoverEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (hoverEl) {
        const text = hoverEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorVariant("hover-custom");
      } else if (target.closest("button, a, input, select, textarea")) {
        setCursorText("");
        setCursorVariant("hover-interactive");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "#FFE600",
      mixBlendMode: "difference" as const,
    },
    "hover-interactive": {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(255, 230, 0, 0.25)",
      border: "1px solid #FFE600",
      mixBlendMode: "normal" as const,
    },
    "hover-custom": {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      height: 72,
      width: 72,
      backgroundColor: "#FFE600",
      color: "#000000",
      mixBlendMode: "normal" as const,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-bold text-[10px] uppercase tracking-wider transition-opacity duration-300 hidden md:flex"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 28, stiffness: 350, mass: 0.5 }}
      >
        {cursorText && <span className="text-black font-extrabold tracking-widest">{cursorText}</span>}
      </motion.div>
    </>
  );
};
