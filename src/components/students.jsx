import React, { Component } from "react";
import { getStudents } from "../services/studentService";
import StudentsTable from "./studentsTable";

class Students extends Component {
  state = {
    students: [],
    count: 0,
    currentPage: 1,
    pageSize: 4,
    cohorts: [],
    sortColumn: { path: "name", order: "asc" },
    selectedCohort: null,
  };

  componentDidMount() {
    const students = getStudents();
    this.setState({ students, count: students.length });
  }

  handleDelete = (s) => {
    const students = this.state.students.filter(
      (student) => student._id !== s._id
    );
    this.setState({ students });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
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
    const { students, count, cohorts, sortColumn } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <p>Showing {this.state.count} students in the database.</p>
          <StudentsTable
            students={students}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Students;
