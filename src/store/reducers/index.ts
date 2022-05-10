import photoReducer from "./photoReducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  photoReducer,
});
