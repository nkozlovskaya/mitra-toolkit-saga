import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redusers";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware();

// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: [sagaMiddleware],
//   });
// };

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

//(getDefaultMiddleware) =>
//getDefaultMiddleware().concat(sagaMiddleware),

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof store>;
// export type AppDispatch = AppStore["dispatch"];
