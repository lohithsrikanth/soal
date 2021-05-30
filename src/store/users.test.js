import { cleanup } from "@testing-library/react";
import { login, logout, getUser } from "./users";
import configureStore from "./configureStore";

describe("usersSlice", () => {
  let store;
  const usersSlice = () => store.getState().users.user;

  beforeEach(() => {
    store = configureStore();
  });

  afterEach(cleanup);

  it("should add the user to the store during login", () => {
    const user = { username: "Lohith", password: "123" };

    store.dispatch(login({ username: "Lohith", password: "123" }));

    expect(usersSlice()).toEqual(user);
  });

  it("should save the username in localStorage during login", () => {
    const user = { username: "Lohith", password: "123" };

    store.dispatch(login({ username: "Lohith", password: "123" }));

    expect(localStorage.getItem("username")).toEqual("Lohith");
  });

  it("should have an initial state of null", () => {
    expect(usersSlice()).toEqual(null);
  });

  it("should have a state of null when logged out", () => {
    const user = null;

    store.dispatch(login({ username: "Lohith", password: "123" }));
    store.dispatch(logout());

    expect(usersSlice()).toEqual(user);
  });

  it("should remove the username from localStorage when logged out", () => {
    const user = { username: "Lohith", password: "123" };

    store.dispatch(login(user));
    store.dispatch(logout());

    expect(localStorage.getItem("username")).toEqual(null);
  });
});
