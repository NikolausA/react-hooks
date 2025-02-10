import { useToggle } from "../hooks";

export const ToggleComponent = () => {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return <button onClick={() => toggle()}>{value}</button>;
};
