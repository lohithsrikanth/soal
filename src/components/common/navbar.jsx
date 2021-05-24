import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout, getUser } from "../../store/users";

const Navbar = ({ user }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        marginBottom: 20,
        fontWeight: "bold",
        fontFamily: "monospace",
      }}
    >
      <Link className="navbar-brand" to="/">
        SOAL
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/students">
              Students <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
        {user && (
          <span
            style={{ marginLeft: 700, color: "black" }}
            className="navbar-text"
          >
            Hello, {user.username}
          </span>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(Navbar);
