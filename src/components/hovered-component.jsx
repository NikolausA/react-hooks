import { useHover } from "../hooks";

export const HoveredComponent = () => {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
    </div>
  );
};
