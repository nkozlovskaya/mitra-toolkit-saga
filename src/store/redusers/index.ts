import photoReducer from "./photoReduser";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  photoReducer,
});
