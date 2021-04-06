//import logo from './logo.svg';
import React from "react";
import "./App.css";
import Students from "./components/students";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/common/navbar";

function App() {
  return (
    <div className="container" style={{ marginTop: 20 }}>
      <Navbar />
      <Switch>
        <Route path="/students" component={Students} />
        <Redirect path="/" exact to="/students" />
      </Switch>
    </div>
  );
}

export default App;
