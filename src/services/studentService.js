import * as cohortsAPI from "./cohortService";

const students = [
  {
    _id: "1",
    name: "Vishaka Gupta",
    cohort: { _id: "1", name: "Apex" },
    email: "vishakagupta@gmail.com",
    phoneNumber: "9934213445",
    github: "github.com/vishakagupta",
    linkedIn: "linkedin.com/vishakagupta",
    attendance: [
      { name: "Classes Attended in January", value: 15 },
      { name: "Classes Missed in January", value: 5 },
      { name: "Classes Attended in February", value: 19 },
      { name: "Classes Missed in February", value: 1 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "2",
    name: "Himanshu Jain",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "himanshu.jain@gmail.com",
    phoneNumber: "9022455231",
    github: "github.com/himanshujain",
    linkedIn: "linkedin.com/himanshujain",
    attendance: [
      { name: "Classes Attended in January", value: 14 },
      { name: "Classes Missed in January", value: 6 },
      { name: "Classes Attended in February", value: 16 },
      { name: "Classes Missed in February", value: 4 },
      { name: "Classes Attended in March", value: 19 },
      { name: "Classes Missed in March", value: 6 },
    ],
    linesWritten: linesWrittenTemplate,
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "3",
    name: "Aditya Prakash",
    cohort: { _id: "3", name: "Zenith" },
    email: "aditya.prakash@gmail.com",
    phoneNumber: "8019133211",
    github: "github.com/adityaprakash",
    linkedIn: "linkedin.com/adityaprakash",
    attendance: [
      { name: "Classes Attended in January", value: 12 },
      { name: "Classes Missed in January", value: 8 },
      { name: "Classes Attended in February", value: 15 },
      { name: "Classes Missed in February", value: 5 },
      { name: "Classes Attended in March", value: 22 },
      { name: "Classes Missed in March", value: 3 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "4",
    name: "Nikunj Agarwal",
    cohort: { _id: "4", name: "Summit" },
    email: "nikunj.agarwal@gmail.com",
    phoneNumber: "8029324334",
    github: "github.com/nikunjagarwal",
    linkedIn: "linkedin.com/nikunjagarwal",
    attendance: [
      { name: "Classes Attended in January", value: 13 },
      { name: "Classes Missed in January", value: 7 },
      { name: "Classes Attended in February", value: 19 },
      { name: "Classes Missed in February", value: 1 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "5",
    name: "Deepansh Singh",
    cohort: { _id: "1", name: "Apex" },
    email: "deepanshsingh@gmail.com",
    phoneNumber: "9823243432",
    github: "github.com/deepanshsingh",
    linkedIn: "linkedin.com/deepanshsingh",
    attendance: [
      { name: "Classes Attended in January", value: 15 },
      { name: "Classes Missed in January", value: 5 },
      { name: "Classes Attended in February", value: 19 },
      { name: "Classes Missed in February", value: 1 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "6",
    name: "Yashwant Reddy",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "yashwantreddy@gmail.com",
    phoneNumber: "8253293123",
    github: "github.com/yashwantreddy",
    linkedIn: "linkedin.com/yashwantreddy",
    attendance: [
      { name: "Classes Attended in January", value: 13 },
      { name: "Classes Missed in January", value: 7 },
      { name: "Classes Attended in February", value: 19 },
      { name: "Classes Missed in February", value: 1 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "7",
    name: "Sanjana Kumar",
    cohort: { _id: "3", name: "Zenith" },
    email: "sanjanakumar@gmail.com",
    phoneNumber: "8800024223",
    github: "github.com/sanjanakumar",
    linkedIn: "linkedin.com/sanjanakumar",
    attendance: [
      { name: "Classes Attended in January", value: 20 },
      { name: "Classes Missed in January", value: 0 },
      { name: "Classes Attended in February", value: 19 },
      { name: "Classes Missed in February", value: 1 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "8",
    name: "Aman Kashyap",
    cohort: { _id: "4", name: "Summit" },
    email: "amankashyap@gmail.com",
    phoneNumber: "8827543291",
    github: "github.com/amankashyap",
    linkedIn: "linkedin.com/amankashyap",
    attendance: [
      { name: "Classes Attended in January", value: 20 },
      { name: "Classes Missed in January", value: 5 },
      { name: "Classes Attended in February", value: 19 },
      { name: "Classes Missed in February", value: 1 },
      { name: "Classes Attended in March", value: 25 },
      { name: "Classes Missed in March", value: 0 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "9",
    name: "Suraj Krishnan",
    cohort: { _id: "1", name: "Apex" },
    email: "surajkrishnan@gmail.com",
    phoneNumber: "6987457620",
    github: "github.com/surajkrishnan",
    linkedIn: "linkedin.com/surajkrishnan",
    attendance: [
      { name: "Classes Attended in January", value: 16 },
      { name: "Classes Missed in January", value: 4 },
      { name: "Classes Attended in February", value: 18 },
      { name: "Classes Missed in February", value: 2 },
      { name: "Classes Attended in March", value: 23 },
      { name: "Classes Missed in March", value: 2 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "10",
    name: "Kavya Singh",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "kavyasingh@gmail.com",
    phoneNumber: "8936475120",
    github: "github.com/kavyasingh",
    linkedIn: "linkedin.com/kavyasingh",
    attendance: [
      { name: "Classes Attended in January", value: 13 },
      { name: "Classes Missed in January", value: 7 },
      { name: "Classes Attended in February", value: 19 },
      { name: "Classes Missed in February", value: 1 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "11",
    name: "Pramodith Gupta",
    cohort: { _id: "3", name: "Zenith" },
    email: "pramodithgupta@gmail.com",
    phoneNumber: "8931752401",
    github: "github.com/pramodithgupta",
    linkedIn: "linkedin.com/pramodithgupta",
    attendance: [
      { name: "Classes Attended in January", value: 20 },
      { name: "Classes Missed in January", value: 0 },
      { name: "Classes Attended in February", value: 19 },
      { name: "Classes Missed in February", value: 1 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "12",
    name: "Subhanshu Singh",
    cohort: { _id: "4", name: "Summit" },
    email: "subhanshusingh@gmail.com",
    phoneNumber: "7596358710",
    github: "github.com/subhanshusingh",
    linkedIn: "linkedin.com/subhanshusingh",
    attendance: [
      { name: "Classes Attended in January", value: 20 },
      { name: "Classes Missed in January", value: 0 },
      { name: "Classes Attended in February", value: 20 },
      { name: "Classes Missed in February", value: 0 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "13",
    name: "Rishabh Mahajan",
    cohort: { _id: "1", name: "Apex" },
    email: "rishabhmahajan@gmail.com",
    phoneNumber: "7985463120",
    github: "github.com/rishabhmahajan",
    linkedIn: "linkedin.com/rishabhmahajan",
    attendance: [
      { name: "Classes Attended in January", value: 18 },
      { name: "Classes Missed in January", value: 2 },
      { name: "Classes Attended in February", value: 16 },
      { name: "Classes Missed in February", value: 4 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "14",
    name: "Vishnu Deva",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "vishnudeva@gmail.com",
    phoneNumber: "7795236762",
    github: "github.com/vishnudeva",
    linkedIn: "linkedin.com/vishnudeva",
    attendance: [
      { name: "Classes Attended in January", value: 10 },
      { name: "Classes Missed in January", value: 10 },
      { name: "Classes Attended in February", value: 13 },
      { name: "Classes Missed in February", value: 7 },
      { name: "Classes Attended in March", value: 21 },
      { name: "Classes Missed in March", value: 4 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "15",
    name: "Keshav Gaba",
    cohort: { _id: "3", name: "Zenith" },
    email: "keshavgaba@gmail.com",
    phoneNumber: "9878700932",
    github: "github.com/keshavgaba",
    linkedIn: "linkedin.com/keshavgaba",
    attendance: [
      { name: "Classes Attended in January", value: 20 },
      { name: "Classes Missed in January", value: 0 },
      { name: "Classes Attended in February", value: 18 },
      { name: "Classes Missed in February", value: 2 },
      { name: "Classes Attended in March", value: 23 },
      { name: "Classes Missed in March", value: 2 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "16",
    name: "Ayush Nag",
    cohort: { _id: "1", name: "Apex" },
    email: "ayushnag@gmail.com",
    phoneNumber: "8796523104",
    github: "github.com/ayushnag",
    linkedIn: "linkedin.com/ayushnag",
    attendance: [
      { name: "Classes Attended in January", value: 16 },
      { name: "Classes Missed in January", value: 4 },
      { name: "Classes Attended in February", value: 17 },
      { name: "Classes Missed in February", value: 3 },
      { name: "Classes Attended in March", value: 19 },
      { name: "Classes Missed in March", value: 6 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "17",
    name: "Harleen Dhillon",
    cohort: { _id: "3", name: "Zenith" },
    email: "harleendhillon@gmail.com",
    phoneNumber: "8549635710",
    github: "github.com/harleendhillon",
    linkedIn: "linked.com/harleendhillon",
    attendance: [
      { name: "Classes Attended in January", value: 18 },
      { name: "Classes Missed in January", value: 2 },
      { name: "Classes Attended in February", value: 19 },
      { name: "Classes Missed in February", value: 1 },
      { name: "Classes Attended in March", value: 22 },
      { name: "Classes Missed in March", value: 3 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
  {
    _id: "18",
    name: "Prithvijit Ganguly",
    cohort: { _id: "2", name: "Pinnacle" },
    email: "prithvijitganguly@gmail.com",
    phoneNumber: "7985469823",
    github: "github.com/prithvijitganguly",
    linkedIn: "linked.com/prithvijit ganguly",
    attendance: [
      { name: "Classes Attended in January", value: 17 },
      { name: "Classes Missed in January", value: 3 },
      { name: "Classes Attended in February", value: 15 },
      { name: "Classes Missed in February", value: 5 },
      { name: "Classes Attended in March", value: 20 },
      { name: "Classes Missed in March", value: 5 },
    ],
    linesWritten: linesWrittenTemplate(),
    numberOfCommits: numberOfCommitsTemplate(),
  },
];

export function getStudents() {
  return students;
}

export function getStudent(id) {
  return students.find((student) => student.id === id);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function linesWrittenTemplate() {
  const template = [
    {
      name: "January",
      "Number of Lines Written": null,
      "Average Number of Lines Written": null,
    },
    {
      name: "February",
      "Number of Lines Written": null,
      "Average Number of Lines Written": null,
    },
    {
      name: "March",
      "Number of Lines Written": null,
      "Average Number of Lines Written": null,
    },
  ];
  return template;
}

function numberOfCommitsTemplate() {
  const template = [
    {
      name: "January",
      "Number of Commits Made": null,
      "Average Number of Commits Made": null,
    },
    {
      name: "February",
      "Number of Commits Made": null,
      "Average Number of Commits Made": null,
    },
    {
      name: "March",
      "Number of Commits Made": null,
      "Average Number of Commits Made": null,
    },
  ];
  return template;
}

export function populateLinesWritten(students) {
  let sum1 = 0,
    sum2 = 0,
    sum3 = 0,
    avg1 = 0,
    avg2 = 0,
    avg3 = 0;
  Array.from(students).forEach((student) =>
    Array.from(student.linesWritten).forEach((s) => {
      s["Number of Lines Written"] = getRndInteger(500, 2000);
      if (s.name === "January") sum1 += s["Number of Lines Written"];
      else if (s.name === "February") sum2 += s["Number of Lines Written"];
      else if (s.name === "March") sum3 += s["Number of Lines Written"];
    })
  );
  Array.from(students).forEach((student) =>
    Array.from(student.linesWritten).forEach((s) => {
      if (s.name === "January") {
        avg1 = Math.round(sum1 / students.length);
        s["Average Number of Lines Written"] = avg1;
      } else if (s.name === "February") {
        avg2 = Math.round(sum2 / students.length);
        s["Average Number of Lines Written"] = avg2;
      } else if (s.name === "March") {
        avg3 = Math.round(sum3 / students.length);
        s["Average Number of Lines Written"] = avg3;
      }
    })
  );
}

export function populateCommits(students) {
  let sum1 = 0,
    sum2 = 0,
    sum3 = 0,
    avg1 = 0,
    avg2 = 0,
    avg3 = 0;
  Array.from(students).forEach((student) =>
    Array.from(student.numberOfCommits).forEach((s) => {
      s["Number of Commits Made"] = getRndInteger(20, 150);
      if (s.name === "January") sum1 += s["Number of Commits Made"];
      else if (s.name === "February") sum2 += s["Number of Commits Made"];
      else if (s.name === "March") sum3 += s["Number of Commits Made"];
    })
  );
  Array.from(students).forEach((student) =>
    Array.from(student.numberOfCommits).forEach((s) => {
      if (s.name === "January") {
        avg1 = Math.round(sum1 / students.length);
        s["Average Number of Commits Made"] = avg1;
      } else if (s.name === "February") {
        avg2 = Math.round(sum2 / students.length);
        s["Average Number of Commits Made"] = avg2;
      } else if (s.name === "March") {
        avg3 = Math.round(sum3 / students.length);
        s["Average Number of Commits Made"] = avg3;
      }
    })
  );
}

export function totalClassesHeld() {
  const classes = [
    { name: "Classes Held in January", value: 20 },
    { name: "Classes Held in February", value: 20 },
    { name: "Classes Held in March", value: 25 },
  ];
  return classes;
}
