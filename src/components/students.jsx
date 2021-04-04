import React, { Component } from "react";
import { getStudents } from "../services/studentService";
import { getCohorts } from "../services/cohortService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";
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
    const cohorts = [{ _id: "", name: "All Students" }, ...getCohorts()];
    this.setState({
      students,
      cohorts,
      count: students.length,
    });
  }

  handleDelete = (s) => {
    const students = this.state.students.filter(
      (student) => student._id !== s._id
    );
    this.setState({ students, count: students.length });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCohortChange = (cohort) => {
    this.setState({ selectedCohort: cohort, currentPage: 1 });
  };

  render() {
    const {
      students: allStudents,
      count,
      cohorts,
      sortColumn,
      pageSize,
      currentPage,
      selectedCohort,
    } = this.state;

    const filtered =
      selectedCohort && selectedCohort._id
        ? allStudents.filter((m) => m.cohort._id === selectedCohort._id)
        : allStudents;

    const students = paginate(filtered, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={cohorts}
              selectedItem={selectedCohort}
              onItemSelect={this.handleCohortChange}
            />
          </div>
          <div className="col">
            <p>
              Showing
              {filtered.length === 1
                ? " " + filtered.length + " student "
                : " " + filtered.length + " students "}
              in the database
            </p>
            <StudentsTable
              students={students}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Students;
