import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../store/users";

class Logout extends Component {
  componentDidMount() {
    this.props.logout();

    window.location = "/";
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
