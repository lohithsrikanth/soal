//import logo from './logo.svg';
import React from "react";
import "./App.css";
import Students from "./components/students";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/common/navbar";
import NotFound from "./components/notfound";
import StudentDetails from "./components/studentDetails";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";

function App() {
  return (
    <div className="container" style={{ marginTop: 20 }}>
      <Navbar />
      <Switch>
        <Route path="/students/:id" component={StudentDetails} />
        <Route path="/students" component={Students} />
        <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={Logout} />
        <Route path="/not-found" component={NotFound} />
        <Redirect path="/" exact to="/students" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
