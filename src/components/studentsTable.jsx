import React, { Component } from "react";
import Table from "./common/table";

class StudentsTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
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
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(m)}
          >
            Delete
          </button>
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
