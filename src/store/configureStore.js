import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersReducer from "./users";

const reducer = combineReducers({
  users: usersReducer,
});

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware()],
  });
}
