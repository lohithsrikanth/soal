import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import { Router } from "react-router-dom";
import App from "./App";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("<App /> renders without crashing", () => {
  const div = document.createElement("div");
  const history = createMemoryHistory();
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    div
  );
});
