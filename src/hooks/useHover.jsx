import { useState, useRef, useEffect } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleHover = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    const element = ref.current;

    if (element) {
      element.addEventListener("mouseenter", handleHover);
      element.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleHover);
        element.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  return { hovered, ref };
};
