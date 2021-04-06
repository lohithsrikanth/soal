import React, { Component } from "react";

class NotFound extends Component {
  handleClick = () => {
    this.props.history.replace("/students");
  };

  render() {
    return (
      <div>
        <h1>Page Not Found!</h1>
        <button className="btn btn-primary btn-sm" onClick={this.handleClick}>
          Go Back to Students Page
        </button>
      </div>
    );
  }
}

export default NotFound;
