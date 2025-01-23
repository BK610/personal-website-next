import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

export default function FlashlightEffect({
  children,
  size = 250,
  intensity = 0.8,
  softness = 0.8,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleMouseMove(e) {
      setIsFocused(true);
      const rect = container.getBoundingClientRect();

      // Get relative mouse position within the container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create the gradient background
      // The first color stop is the bright center
      // The second color stop creates the soft edge
      const gradient = `
        radial-gradient(
          circle ${size}px at ${x}px ${y}px,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, ${intensity}) ${100 * softness}%
        )
      `;

      // Apply the gradient
      container.style.setProperty("--light-position", gradient);
    }

    function handleMouseLeave() {
      setIsFocused(false);
      container.style.setProperty("--light-position", "none");
    }

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [size, intensity, softness]);

  return (
    <motion.div
      ref={containerRef}
      className="relative isolate"
      style={{
        "--light-position": "none",
      }}
    >
      {
        /* Dark overlay */ isFocused && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              maskImage: "var(--light-position)",
              WebkitMaskImage: "var(--light-position)",
              maskComposite: "destination-out",
              WebkitMaskComposite: "destination-out",
            }}
          />
        )
      }

      {/* Content */}
      {children}
    </motion.div>
  );
}
