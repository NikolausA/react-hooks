import { useState } from "react";

export const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const [collection, setCollection] = useState();

  const mapedValues = new Map();
  const setMapCollection = (data) => {
    if (!data) {
      mapedValues.set("false", "true").set("true", "false");
      setCollection(mapedValues);
      return;
    } else {
      for (let i = 0; i < data.length; i++) {
        let current = data[i];
        let next = i == data.length - 1 ? data[0] : data[i + 1];
        mapedValues.set(current, next);
      }
      setCollection(mapedValues);
    }
  };

  if (!value) {
    setMapCollection(value);
    setValue("true");
  } else if (Array.isArray(value)) {
    setMapCollection(value);
    setValue(value[0]);
  }

  const toggle = () => {
    let payload = collection.get(value);
    setValue(payload);
  };

  return [value, toggle];
};
