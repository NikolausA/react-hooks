import { useLocalStorage } from "../hooks";

export const LocalStorage = () => {
  const [value, { setItem, removeItem }] = useLocalStorage("key");

  return (
    <div>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button
          onClick={() => {
            setItem("new storage value");
          }}
        >
          Задать значение
        </button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
};
