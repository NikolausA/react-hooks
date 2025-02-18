import { useReducer } from "react";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_NEXT_VALUE":
      return (state = payload);
  }
};

export const useToggle = (defaultValue) => {
  const initialValue = !defaultValue
    ? "true"
    : Array.isArray(defaultValue)
    ? defaultValue[0]
    : "";
  const [value, dispatch] = useReducer(reducer, initialValue);
  const defineNextValue = (value) => {
    let nextValue = "";
    if (value === "false") {
      nextValue = "true";
    }
    if (value === "true") {
      nextValue = "false";
    }
    if (Array.isArray(defaultValue) && typeof value === "string") {
      const inx = defaultValue.indexOf(value);
      nextValue =
        inx === defaultValue.length - 1
          ? defaultValue[0]
          : defaultValue[inx + 1];
    }

    return nextValue;
  };

  const toggle = () => {
    dispatch({ type: "SET_NEXT_VALUE", payload: defineNextValue(value) });
  };

  return [value, toggle];
};
