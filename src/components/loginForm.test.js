import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./loginForm";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserEvent from "@testing-library/user-event";
import Input from "./common/input";

afterEach(cleanup);

const renderWithRedux = (component, { store = configureStore() } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

it("renders <LoginForm /> component without crashing", () => {
  const div = document.createElement("div");
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <LoginForm />
    </Provider>,
    div
  );
});

it("<LoginForm /> component renders Username field", () => {
  renderWithRedux(<LoginForm />);

  expect(screen.getByText("Username")).toBeInTheDocument();
});

it("<LoginForm /> component renders Password field", () => {
  renderWithRedux(<LoginForm />);

  expect(screen.getByText("Password")).toBeInTheDocument();
});

it("button should be disabled in the beginning", () => {
  renderWithRedux(<LoginForm />);

  expect(screen.getByRole("button")).toBeDisabled();
});

it("input value is updated correctly", () => {
  renderWithRedux(<LoginForm />);

  const input = screen.getByTestId("first");
  UserEvent.type(input, "React");

  expect(input.value).toBe("React");
});

it("call the callback every time input value is changed", () => {
  const onChange = jest.fn();

  render(
    <Input
      onChange={onChange}
      value=""
      type="text"
      name="username"
      label="Username"
      error={null}
    />
  );

  const input = screen.getByTestId("first");
  UserEvent.type(input, "React");

  expect(onChange).toHaveBeenCalledTimes(5);
});
