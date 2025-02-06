import "./App.css";
import { LocalStorage, Posts } from "./components";

function App() {
  return (
    <>
      <h1>Task Board</h1>
      <Posts />
      <LocalStorage />
    </>
  );
}

export default App;
