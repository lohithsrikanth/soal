//import logo from './logo.svg';
import React from "react";
import "./App.css";
import Students from "./components/students";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container" style={{ marginTop: 40 }}>
      <Switch>
        <Route path="/students" component={Students} />
        <Redirect path="/" exact to="/students" />
      </Switch>
    </div>
  );
}

export default App;
