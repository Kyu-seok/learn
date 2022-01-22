import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import ThirdComponent from "./components/learning-examples/ThirdComponent";

function App() {
  return (
    <div className="App">
      Hello World
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

// Function Component

export default App;
