import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./features/basketSlice";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

export const store = configureStore(
  {
    reducer: {
      nav: navReducer,
    },
  },
  applyMiddleware(logger)
);
