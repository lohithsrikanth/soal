import React, { Component } from "react";
import PieRepresentation from "../charts/PieChart";
import BarRepresentation from "../charts/BarChart";
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

const lineStyle = {
  height: "2px",
  borderWidth: 0,
  color: "gray",
  backgroundColor: "gray",
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
    const classesHeld = totalClassesHeld();
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          Student Details
        </h1>
        <hr style={lineStyle} />
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
        <hr style={lineStyle} />
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Stats</h2>
        <hr />
        <div style={{ margin: 0 }}>
          <h3>
            <u>Attendance Report of {student.name}</u>
          </h3>
          <ul>
            <li>
              The following Pie Chart shows the attendance report for the months
              of January, February and March. The student's attendance details
              can be reviewed by hovering your mouse over the Pie Chart.
            </li>
          </ul>
        </div>
        <div style={{ margin: -70 }}>
          <PieRepresentation data1={classesHeld} data2={student.attendance} />
        </div>
        <hr />
        <div>
          <h3>
            <u>Number of Lines of Code Written</u>
          </h3>
          <ul>
            <li>
              The following Bar Chart shows the number of lines of code written
              by the student for the months of January, February and March. The
              bars represent the student's statistic and the orange line
              represents the average number of lines of code written by all the
              students in the 3 months. The statistics can be reviewed by
              hovering your mouse over the Bar Chart.
            </li>
          </ul>
        </div>
        <div>
          <BarRepresentation
            data={student.linesWritten}
            dataBar="Number of Lines Written"
            dataLine="Average Number of Lines Written"
          />
        </div>
        <hr />
        <div>
          <h3>
            <u>Number of Commits Made</u>
          </h3>
          <ul>
            <li>
              The following Bar Chart shows the number of commits made by the
              student for the months of January, February and March. The bars
              represent the student's statistic and the orange line represents
              the average number of commits made by all the students in the 3
              months. The statistics can be reviewed by hovering your mouse over
              the Bar Chart.
            </li>
          </ul>
        </div>
        <div>
          <BarRepresentation
            data={student.numberOfCommits}
            dataBar="Number of Commits Made"
            dataLine="Average Number of Commits Made"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default StudentDetails;
