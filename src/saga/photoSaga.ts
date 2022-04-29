import { call, put, takeEvery } from "redux-saga/effects";
import { getPhotos } from "../api/api";
import {
  getPhotosFetch,
  getPhotosSuccess,
  getPhotosError,
} from "../store/redusers/photoReduser";

import { IPhoto } from "../types";

const delay = (ms = 1000) => new Promise((res) => setTimeout(res, ms));

function* getPhotoWorker() {
  try {
    yield delay();
    yield put(getPhotosFetch());
    const res: IPhoto[] = yield call(getPhotos);
    yield put(getPhotosSuccess(res));
  } catch (e) {
    yield put(getPhotosError("Произошла ошибка при загрузке фотографий "));
  }
}

export function* photoWatcher() {
  yield takeEvery("photos/getPhotosFetch", getPhotoWorker);
}
