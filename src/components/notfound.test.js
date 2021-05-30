import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NotFound from "./notfound";

afterEach(cleanup);

it("renders <NotFound /> component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NotFound />, div);
});

it("renders Page Not Found", () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/page not found/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders Go Back To Students Page button", () => {
  render(<NotFound />);

  expect(screen.getByRole("button")).toBeInTheDocument();
});
