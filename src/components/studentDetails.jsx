import React, { Component } from "react";
import {
  getStudents,
  populateLinesWritten,
  populateCommits,
  totalClassesHeld,
} from "../services/studentService";

const style1 = {
  backgroundColor: "#003366",
  color: "#FFFFFF",
};

const style2 = {
  backgroundColor: "#99CCCC",
  color: "#000000",
};
class StudentDetails extends Component {
  getStudentData = () => {
    let students = getStudents();
    populateLinesWritten(students);
    populateCommits(students);
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
          <li className="list-group-item" style={style1}>
            The following are the details of {student.name}:
          </li>
          <li className="list-group-item" style={style2}>
            <strong>Name:</strong> {student.name}
          </li>
          <li className="list-group-item" style={style2}>
            <strong>Cohort:</strong> {student.cohort.name}
          </li>
          <li className="list-group-item" style={style2}>
            <strong>Phone Number:</strong> {student.phoneNumber}
          </li>
          <li className="list-group-item" style={style2}>
            <strong>Email:</strong> {student.email}
          </li>
          <li className="list-group-item" style={style2}>
            <strong>LinkedIn:</strong> {student.linkedIn}
          </li>
          <li className="list-group-item" style={style2}>
            <strong>Github:</strong> {student.github}
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default StudentDetails;
