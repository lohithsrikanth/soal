import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../store/users";

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  handleClick = () => {
    this.props.history.replace("/students");
  };

  render() {
    return (
      <div>
        <p>You have been logged out!</p>
        <button className="btn btn-primary btn-sm" onClick={this.handleClick}>
          Go Back to Students Page
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
