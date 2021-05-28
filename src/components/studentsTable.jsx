import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import { getUser } from "../store/users";

const user = getUser();
class StudentsTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: (student) => (
        <Link to={`/students/${student._id}`}>{student.name}</Link>
      ),
    },
    {
      path: "cohort.name",
      label: "Cohort",
    },
    {
      path: "email",
      label: "Email",
    },
    {
      path: "phoneNumber",
      label: "Phone Number",
    },
    {
      key: "delete",
      content: (m) => {
        return (
          user && (
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.onDelete(m)}
            >
              Delete
            </button>
          )
        );
      },
    },
  ];
  render() {
    const { students, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={students}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default StudentsTable;
