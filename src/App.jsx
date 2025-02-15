import "./App.css";
import {
  // SigninForm,
  SignupForm,
  HoveredComponent,
  LocalStorage,
  Posts,
  ScrollComponent,
  ToggleComponent,
  ViewportSizeComponent,
} from "./components";

function App() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <SignupForm onSubmit={handleSubmit} />
      {/* <SigninForm onSubmit={handleSubmit} /> */}
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
