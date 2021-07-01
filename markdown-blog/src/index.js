import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import Home from "./pages/home"
//import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./pages/about"

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>, 
  document.getElementById('root')
);

reportWebVitals();
