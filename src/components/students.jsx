import React, { Component } from "react";
import { getStudents } from "../services/studentService";

class Students extends Component {
  state = {
    students: [],
    count: 0,
    currentPage: 1,
    pageSize: 4,
    cohorts: [],
    selectedCohort: null,
  };

  componentDidMount() {
    const students = getStudents();
    this.setState({ students, count: students.length });
  }

  handleDelete = (id) => {
    const students = this.state.students.filter(
      (student) => student._id !== id
    );
    this.setState({ students });
  };

  tableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Cohort</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th></th>
        </tr>
      </thead>
    );
  };

  tableBody = () => {
    return (
      <tbody>
        {this.state.students.map((student) => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.cohort.name}</td>
            <td>{student.email}</td>
            <td>{student.phoneNumber}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.handleDelete(student._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <p>Showing {this.state.count} students in the database</p>
          <table className="table">
            {this.tableHeader()}
            {this.tableBody()}
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Students;
