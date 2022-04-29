import { all } from "redux-saga/effects";
import { photoWatcher } from "./photoSaga";

export function* rootSaga() {
  yield all([photoWatcher()]);
}
