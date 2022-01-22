import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import ThirdComponent from "./components/learning-examples/ThirdComponent";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

export default App;
