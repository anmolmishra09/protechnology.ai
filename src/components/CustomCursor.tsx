import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      

      const scrollElement = target.closest('[data-cursor="scroll"]');
      if (scrollElement) {
        setIsHovering(true);
        setCursorText("DRAG");
        return;
      }

      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') || 
        target.closest('a') || 
        target.closest('input') || 
        target.closest('textarea') ||
        target.closest('.cursor-pointer') ||
        target.closest('[role="button"]');

      setIsHovering(!!isInteractive);

      setCursorText("");
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Ring - Smooth follow with spring physics */}
      <motion.div

        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-normal overflow-hidden"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: cursorText ? 3 : isClicked ? 0.8 : isHovering ? 2.5 : 1,
          backgroundColor: cursorText ? "rgba(20, 184, 166, 0.9)" : isHovering ? "rgba(20, 184, 166, 0.1)" : "transparent",
          borderColor: "#0d9488",
          borderWidth: cursorText ? "0px" : "2px",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}

      >
        <AnimatePresence>
          {cursorText && (
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="text-[6px] font-black text-white tracking-widest uppercase ml-0.5"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner Dot - Immediate follow */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-teal-600 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,

          scale: cursorText ? 0 : isClicked ? 0.5 : 1,
          opacity: cursorText ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
        }}
      />
    </>
  );
}