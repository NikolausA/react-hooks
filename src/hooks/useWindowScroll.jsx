import { useEffect, useState } from "react";

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  const scrollTo = (x = 0, y) => {
    window.scroll(x, y);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll((prev) => ({ ...prev, x: window.scrollX, y: window.scrollY }));
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return [scroll, scrollTo];
};
