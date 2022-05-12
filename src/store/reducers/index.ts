import photoReducer from "./photoReducer";
import errorReducer from "./errorReducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  photoReducer,
  errorReducer,
});
