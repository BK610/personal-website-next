import { useState, useRef, useEffect } from "react";
import Button from "./Button";

export default function LibraryCard({ libraryCard, onClick }) {
  const [isSelected, setIsSelected] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  // const [originalPosition, setOriginalPosition] = useState(null);
  const [initialTouch, setInitialTouch] = useState(null);
  const elementRef = useRef(null);

  const { name, link, branch, acquiredDate, imagePath } = libraryCard;

  const formattedDate = new Date(acquiredDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // useEffect(() => {
  //   if (isSelected) {
  //     const rect = elementRef.current.getBoundingClientRect();
  //     setOriginalPosition({
  //       top: rect.top + window.scrollY,
  //       left: rect.left + window.scrollY,
  //     });
  //   }
  // }, [isSelected]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleTouchMove = (e) => {
      if (!isSelected || !initialTouch) return;
      e.preventDefault();

      const touch = e.touches[0];

      const touchDeltaX = touch.clientX - initialTouch.x;
      const touchDeltaY = touch.clientY - initialTouch.y;

      const rotateX = -touchDeltaX / 10;
      const rotateY = touchDeltaY / 10;

      // Consider this to restrict the rotation on mobile
      // const clampedX = Math.max(-15, Math.min(15, rotateX));
      // const clampedY = Math.max(-15, Math.min(15, rotateY));

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleTouchStart = (e) => {
      if (!isSelected) return;
      const touch = e.touches[0];
      setInitialTouch({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = () => {
      setInitialTouch(null);
      // Enable to reset rotation when the touch ends
      // setRotation({ x: 0, y: 0 });
    };

    // Add event listeners with { passive: false }
    element.addEventListener("touchmove", handleTouchMove, { passive: false });
    element.addEventListener("touchstart", handleTouchStart, { passive: true });
    element.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      // Clean up event listeners
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isSelected, initialTouch]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.setProperty("--rotateX", -1 * rotation.y + "deg");
    element.style.setProperty("--rotateY", -1 * rotation.x + "deg");
  }, [rotation]);

  const toggleSelected = () => {
    console.log("Toggle selected");
    setIsSelected(!isSelected);
    if (!isSelected) {
      setRotation({ x: 0, y: 0 });
      setInitialTouch(null);
    }
  };

  const handleClick = (event) => {
    onClick(event);
    toggleSelected();
  };

  return (
    <div
      className="p-4 grid gap-4 rounded-lg h-fit
    border border-stone-700 dark:border-stone-300 bg-stone-200 dark:bg-stone-800 shadow-md hover:shadow-lg"
    >
      {imagePath && (
        <div
          ref={elementRef}
          onClick={handleClick}
          className="library-card rounded-lg cursor-pointer h-fit mx-auto
                border-2 border-purple-200 hover:border-purple-300 dark:border-purple-400 hover:dark:border-purple-500
                shadow-md hover:shadow-xl"
        >
          <img
            className="object-scale-down h-fit max-h-72 rounded-md m-auto"
            src={imagePath}
            alt={"Library card from " + name}
          />
        </div>
      )}
      <div>
        <h2>{name}</h2>
        <p className="text-stone-600 dark:text-stone-400">
          {branch}
          {" • "}
          Acquired {formattedDate}
        </p>
      </div>
      <Button
        href={link}
        className={"rounded-lg font-semibold w-full hover:shadow-lg"}
      />
    </div>
  );
}
