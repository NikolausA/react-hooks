import "./App.css";
import {
  HoveredComponent,
  LocalStorage,
  Posts,
  ScrollComponent,
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
    </>
  );
}

export default App;
