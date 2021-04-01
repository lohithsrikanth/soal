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

  render() {
    return (
      <React.Fragment>
        <table className="table">{this.tableHeader()}</table>
      </React.Fragment>
    );
  }
}

export default Students;
