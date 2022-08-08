import photoReducer from "./photoReducer";
import errorReducer from "./errorReducer";
import photoByIDReducer from "./photoByIDReduser/photoByIdReducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  photoReducer,
  errorReducer,
  photoByIDReducer,
});
