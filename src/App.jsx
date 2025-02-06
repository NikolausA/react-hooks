import "./App.css";
import { HoveredComponent, LocalStorage, Posts } from "./components";

function App() {
  return (
    <>
      <h1>Task Board</h1>
      <Posts />
      <LocalStorage />
      <HoveredComponent />
    </>
  );
}

export default App;
