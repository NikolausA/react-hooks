import { useViewportSize } from "../hooks";

export const ViewportSizeComponent = () => {
  const { width, height } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
};
