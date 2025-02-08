import "./App.css";
import {
  HoveredComponent,
  LocalStorage,
  Posts,
  ViewportSizeComponent,
} from "./components";

function App() {
  return (
    <>
      <h1>Task Board</h1>
      <Posts />
      <LocalStorage />
      <HoveredComponent />
      <ViewportSizeComponent />
    </>
  );
}

export default App;
