import React, { Component } from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import Form from "./common/form";
import { connect } from "react-redux";
import { login, getUser } from "../store/users";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    const { username, password } = this.state.data;
    this.props.login(username, password);
    window.location = "/";
  };

  render() {
    if (getUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login({ username, password })),
});

export default connect(null, mapDispatchToProps)(LoginForm);
