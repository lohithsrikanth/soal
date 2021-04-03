import React, { Component } from "react";
import { getStudents } from "../services/studentService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import StudentsTable from "./studentsTable";

class Students extends Component {
  state = {
    students: [],
    count: 0,
    currentPage: 1,
    pageSize: 5,
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const {
      students: allStudents,
      count,
      cohorts,
      sortColumn,
      pageSize,
      currentPage,
    } = this.state;

    const students = paginate(allStudents, currentPage, pageSize);
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
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Students;
