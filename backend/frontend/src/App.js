import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import axios from "axios";
import Routes from "./Components/Routes";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
