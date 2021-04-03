import * as cohortsAPI from "./cohortService";

const students = [
  {
    _id: "1",
    name: "Vishaka Gupta",
    cohort: { _id: "1", name: "Apex" },
    email: "vishakagupta@gmail.com",
    phoneNumber: "9934213445",
    github: "github.com/vishakagupta",
    linkedIn: "linked.com/vishakagupta",
    attendanceCount: 78,
    linesWritten: 1002,
    numberOfCommits: 25,
  },
  {
    _id: "2",
    name: "Himanshu Jain",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "himanshu.jain@gmail.com",
    phoneNumber: "9022455231",
    github: "github.com/himanshujain",
    linkedIn: "linked.com/himanshujain",
    attendanceCount: 79,
    linesWritten: 1254,
    numberOfCommits: 52,
  },
  {
    _id: "3",
    name: "Aditya Prakash",
    cohort: { _id: "3", name: "Zenith" },
    email: "aditya.prakash@gmail.com",
    phoneNumber: "8019133211",
    github: "github.com/adityaprakash",
    linkedIn: "linked.com/adityaprakash",
    attendanceCount: 70,
    linesWritten: 900,
    numberOfCommits: 21,
  },
  {
    _id: "4",
    name: "Nikunj Agarwal",
    cohort: { _id: "4", name: "Summit" },
    email: "nikunj.agarwal@gmail.com",
    phoneNumber: "8029324334",
    github: "github.com/nikunjagarwal",
    linkedIn: "linked.com/nikunjagarwal",
    attendanceCount: 69,
    linesWritten: 672,
    numberOfCommits: 10,
  },
  {
    _id: "5",
    name: "Deepansh Singh",
    cohort: { _id: "1", name: "Apex" },
    email: "deepanshsingh@gmail.com",
    phoneNumber: "9823243432",
    github: "github.com/deepanshsingh",
    linkedIn: "linked.com/deepanshsingh",
    attendanceCount: 67,
    linesWritten: 1098,
    numberOfCommits: 27,
  },
  {
    _id: "6",
    name: "Yashwant Reddy",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "yashwantreddy@gmail.com",
    phoneNumber: "8253293123",
    github: "github.com/yashwantreddy",
    linkedIn: "linked.com/yashwantreddy",
    attendanceCount: 73,
    linesWritten: 892,
    numberOfCommits: 23,
  },
  {
    _id: "7",
    name: "Sanjana Kumar",
    cohort: { _id: "3", name: "Zenith" },
    email: "sanjanakumar@gmail.com",
    phoneNumber: "8800024223",
    github: "github.com/sanjanakumar",
    linkedIn: "linked.com/sanjanakumar",
    attendanceCount: 80,
    linesWritten: 1200,
    numberOfCommits: 31,
  },
  {
    _id: "8",
    name: "Aman Kashyap",
    cohort: { _id: "4", name: "Summit" },
    email: "amankashyap@gmail.com",
    phoneNumber: "8827543291",
    github: "github.com/amankashyap",
    linkedIn: "linked.com/amankashyap",
    attendanceCount: 80,
    linesWritten: 2891,
    numberOfCommits: 56,
  },
  {
    _id: "9",
    name: "Suraj Krishnan",
    cohort: { _id: "1", name: "Apex" },
    email: "surajkrishnan@gmail.com",
    phoneNumber: "6987457620",
    github: "github.com/surajkrishnan",
    linkedIn: "linked.com/surajkrishnan",
    attendanceCount: 80,
    linesWritten: 2763,
    numberOfCommits: 49,
  },
  {
    _id: "10",
    name: "Kavya Singh",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "kavyasingh@gmail.com",
    phoneNumber: "8936475120",
    github: "github.com/kavyasingh",
    linkedIn: "linked.com/kavyasingh",
    attendanceCount: 75,
    linesWritten: 1250,
    numberOfCommits: 39,
  },
  {
    _id: "11",
    name: "Pramodith Gupta",
    cohort: { _id: "3", name: "Zenith" },
    email: "pramodithgupta@gmail.com",
    phoneNumber: "8931752401",
    github: "github.com/pramodithgupta",
    linkedIn: "linked.com/pramodithgupta",
    attendanceCount: 80,
    linesWritten: 2901,
    numberOfCommits: 62,
  },
  {
    _id: "12",
    name: "Subhanshu Singh",
    cohort: { _id: "4", name: "Summit" },
    email: "subhanshusingh@gmail.com",
    phoneNumber: "7596358710",
    github: "github.com/subhanshusingh",
    linkedIn: "linked.com/subhanshusingh",
    attendanceCount: 80,
    linesWritten: 3871,
    numberOfCommits: 88,
  },
  {
    _id: "13",
    name: "Rishabh Mahajan",
    cohort: { _id: "1", name: "Apex" },
    email: "rishabhmahajan@gmail.com",
    phoneNumber: "7985463120",
    github: "github.com/rishabhmahajan",
    linkedIn: "linked.com/rishabhmahajan",
    attendanceCount: 79,
    linesWritten: 2003,
    numberOfCommits: 42,
  },
  {
    _id: "14",
    name: "Vishnu Deva",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "vishnudeva@gmail.com",
    phoneNumber: "7795236762",
    github: "github.com/vishnudeva",
    linkedIn: "linked.com/vishnudeva",
    attendanceCount: 54,
    linesWritten: 892,
    numberOfCommits: 12,
  },
  {
    _id: "15",
    name: "Keshav Gaba",
    cohort: { _id: "3", name: "Zenith" },
    email: "keshavgaba@gmail.com",
    phoneNumber: "9878700932",
    github: "github.com/keshavgaba",
    linkedIn: "linked.com/keshavgaba",
    attendanceCount: 80,
    linesWritten: 1462,
    numberOfCommits: 31,
  },
  {
    _id: "16",
    name: "Ayush Nag",
    cohort: { _id: "1", name: "Apex" },
    email: "ayushnag@gmail.com",
    phoneNumber: "8796523104",
    github: "github.com/ayushnag",
    linkedIn: "linked.com/ayushnag",
    attendanceCount: 74,
    linesWritten: 1211,
    numberOfCommits: 29,
  },
  {
    _id: "17",
    name: "Harleen Dhillon",
    cohort: { _id: "3", name: "Zenith" },
    email: "harleendhillon@gmail.com",
    phoneNumber: "8549635710",
    github: "github.com/harleendhillon",
    linkedIn: "linked.com/harleendhillon",
    attendanceCount: 62,
    linesWritten: 900,
    numberOfCommits: 22,
  },
  {
    _id: "18",
    name: "Prithvijit Ganguly",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "prithvijitganguly@gmail.com",
    phoneNumber: "7985469823",
    github: "github.com/prithvijitganguly",
    linkedIn: "linked.com/prithvijit ganguly",
    attendanceCount: 65,
    linesWritten: 1390,
    numberOfCommits: 35,
  },
];

export function getStudents() {
  return students;
}

export function getStudent(id) {
  return students.find((student) => student.id === id);
}

export function saveStudent(student) {
  let studentInDb = students.find((s) => s._id === student._id) || {};
  studentInDb.name = student.name;
  studentInDb.cohort = cohortsAPI.cohorts.find(
    (c) => c._id === student.cohortId
  );
  studentInDb.email = student.email;
  studentInDb.phoneNumber = student.phoneNumber;
  studentInDb.github = student.github;
  studentInDb.linkedIn = student.linkedIn;
  studentInDb.attendanceCount = student.attendanceCount;
  studentInDb.linesWritten = student.linesWritten;
  studentInDb.numberOfCommits = student.numberOfCommits;

  if (!studentInDb._id) {
    studentInDb._id = Date.now().toString();
    students.push(studentInDb);
  }

  return studentInDb;
}
