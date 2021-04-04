import React, { Component } from "react";
import _ from "lodash";
import { getStudents } from "../services/studentService";
import { getCohorts } from "../services/cohortService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";
import Search from "./common/search";
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
    searchQuery: "",
  };

  componentDidMount() {
    const students = getStudents();
    const cohorts = [{ _id: "", name: "All Students" }, ...getCohorts()];
    this.setState({
      students,
      cohorts,
      count: students.length,
      selectedCohort: cohorts[0],
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
    this.setState({ selectedCohort: cohort, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedGenre: null,
      currentPage: 1,
    });
  };
  render() {
    const {
      students: allStudents,
      cohorts,
      sortColumn,
      pageSize,
      currentPage,
      selectedCohort,
      searchQuery,
    } = this.state;

    let filtered = allStudents;
    if (searchQuery) {
      filtered = allStudents.filter((s) =>
        s.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedCohort && selectedCohort._id)
      filtered = allStudents.filter((s) => s.cohort._id === selectedCohort._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const students = paginate(sorted, currentPage, pageSize);
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
            <Search onChange={this.handleSearch} />
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
