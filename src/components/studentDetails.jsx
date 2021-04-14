import React, { Component } from "react";
import { getStudents } from "../services/studentService";

class StudentDetails extends Component {
  getStudentData = () => {
    const students = getStudents();
    const id = this.props.match.params.id;
    const student = students.filter((s) => s._id === id)[0];
    return student;
  };
  render() {
    const student = this.getStudentData();
    return (
      <React.Fragment>
        <h1>Student Details</h1>
        <hr
          style={{
            height: "2px",
            borderWidth: 0,
            color: "gray",
            backgroundColor: "gray",
          }}
        />
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-dark">
            The following are the details of {student.name}:
          </li>
          <li className="list-group-item">Name: {student.name}</li>
          <li className="list-group-item">
            Phone Number: {student.phoneNumber}
          </li>
          <li className="list-group-item">Email: {student.email}</li>
          <li className="list-group-item">LinkedIn: {student.linkedIn}</li>
          <li className="list-group-item">Github: {student.github}</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default StudentDetails;
