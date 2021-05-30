import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import StudentDetails from "./studentDetails";

it("<StudentDetails /> renders without crashing", () => {
  const div = document.createElement("div");
  const history = createMemoryHistory();
  ReactDOM.render(
    <Router history={history}>
      <Route path="/students/:id">
        <StudentDetails />
      </Route>
    </Router>,
    div
  );
});
