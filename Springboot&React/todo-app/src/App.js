import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter.jsx'
import TodoApp from './components/todo/TodoApp'
import './bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
         {/*<Counter/>*/}
         <TodoApp/>
      </div>
    );
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div className="FirstComponent">
        FirstComponent
      </div>
    );
  }
}

class SecondComponent extends Component {
  render() {
    return (
      <div className="SecondComponent">
        SecondComponent
      </div>
    );
  }
}

function ThirdComponent() {
  return (
    <div className="thirdComponent">
       Third Component
    </div>
  )
}
export default App;