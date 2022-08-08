// import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
