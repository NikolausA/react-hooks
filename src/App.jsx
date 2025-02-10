import "./App.css";
import {
  HoveredComponent,
  LocalStorage,
  Posts,
  ScrollComponent,
  ToggleComponent,
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
      <ScrollComponent />
      <ToggleComponent />
    </>
  );
}

export default App;
