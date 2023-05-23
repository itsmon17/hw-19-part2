import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authReducer, authSlice } from "./authSlice";
import { todoReducer, todoSlice } from "./todoSlice";

const reducers = combineReducers({
  [authSlice.name]: authReducer,
  [todoSlice.name]: todoReducer,
});

export const store = configureStore({ reducer: reducers });
