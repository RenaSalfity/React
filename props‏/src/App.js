// import { BrowserRouter } from "react-router-dom";
import ColorBlock from "./components/ColorBlock";
import ActionButton from "./components/ActionButton";
import "./App.css";
import ImageWithCaption from "./components/ImageWithCaption";

function App() {
  const handleClick = () => {};
  return (
    <div className="App">
      {/* <BrowserRouter </BrowserRouter> */}
      <ColorBlock colors="green" />
      <ColorBlock />
      {/* <ColorBlock colors="blue" /> */}
      <ActionButton
        label="Click me"
        onAction={() => alert("Button clicked!")}
      />
      <ImageWithCaption
        src="https://images.unsplash.com/photo-1735122787856-3537228a5e96?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        caption="A Child looking at a chirstmas tree"
      />

      <ImageWithCaption caption="No Image Provided" />
      <ImageWithCaption />
    </div>
  );
}

export default App;
