// import thunk from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import { rootReducer } from "./reducers";
import { rootSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//[sagaMiddleware]
//(getDefaultMiddleware) =>
//    getDefaultMiddleware().concat(sagaMiddleware)
