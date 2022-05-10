import { call, put, takeEvery } from "redux-saga/effects";
import { getPhotos } from "../api/api";
import {
  // getPhotosFetch,
  getPhotosSuccess,
} from "../store/reducers/photoReducer";

import { IPhoto } from "../types";

function* getPhotoWorker() {
  // yield put(getPhotosFetch());
  const res: IPhoto[] = yield call(getPhotos);
  yield put(getPhotosSuccess(res));
}

export function* photoWatcher() {
  yield takeEvery("photos/getPhotosFetch", getPhotoWorker);
}
