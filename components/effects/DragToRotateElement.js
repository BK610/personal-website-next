import { motion } from "motion/react";
import { useRef } from "react";

export default function DragToRotateElement({ children }) {
  const elementRef = useRef(null);
  let initialX = 0;
  let initialY = 0;

  const handleDragStart = (e) => {
    initialX = e.clientX;
    initialY = e.clientY;
  };

  const handleDrag = (e) => {
    if (!elementRef.current) return;

    // Calculate distance from initial position
    const deltaX = e.clientX - initialX;
    const deltaY = e.clientY - initialY;

    // Calculate rotation (smaller divisor = more rotation)
    const rotateX = -deltaY / 10;
    const rotateY = deltaX / 10;

    // Apply the rotation without moving the element
    elementRef.current.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
  };

  const handleDragEnd = () => {
    // Include this to reset the element after letting go
    if (!elementRef.current) return;
    // Reset rotation when drag ends
    elementRef.current.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
      `;
  };

  return (
    <motion.div
      ref={elementRef}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
        cursor: "grab",
        touchAction: "none",
      }}
      onPointerDown={(e) => {
        e.preventDefault();
        handleDragStart(e);
        document.addEventListener("pointermove", handleDrag);
        document.addEventListener(
          "pointerup",
          () => {
            document.removeEventListener("pointermove", handleDrag);
            handleDragEnd();
          },
          { once: true }
        );
      }}
    >
      {children}
    </motion.div>
  );
}
