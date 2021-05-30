import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import Students from "./students";
import { render, screen, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("<Students /> renders without crashing", () => {
  const div = document.createElement("div");
  const history = createMemoryHistory();
  ReactDOM.render(
    <Router history={history}>
      <Students />
    </Router>,
    div
  );
});

it("<Students /> page contains 10 list items which include the pagination and List Group items", () => {
  renderWithRouter(<Students />);

  const listItems = screen.getAllByRole("listitem");

  expect(listItems.length).toEqual(10);
});

it("<Students /> component renders a table", () => {
  renderWithRouter(<Students />);

  const tableElement = screen.getByRole("table");

  expect(tableElement).toBeInTheDocument();
});

it("<Students /> component renders 4 table rows", () => {
  renderWithRouter(<Students />);

  const tableItems = screen.getAllByTestId("table-row");

  expect(tableItems.length).toEqual(4);
});

it("<Students /> component shows the number of students in the database", () => {
  const { getByText } = renderWithRouter(<Students />);

  expect(getByText("Showing 18 students in the database")).toBeInTheDocument();
});
