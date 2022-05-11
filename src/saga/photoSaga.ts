import { call, put, takeEvery } from "redux-saga/effects";
import { getPhotos } from "../api/api";
import {
  getPhotosSuccessLondon,
  getPhotosSuccessParis,
  getPhotosSuccessMoscow,
  getPhotosSuccessBerlin,
  getPhotosError,
} from "../store/reducers/photoReducer";

import { IPhoto } from "../types";

function* getPhotoLondon() {
  const res: IPhoto[] = yield call(getPhotos, "london");
  yield put(getPhotosSuccessLondon(res));
}
function* getPhotoParis() {
  const res: IPhoto[] = yield call(getPhotos, "paris");
  yield put(getPhotosSuccessParis(res));
}
function* getPhotoBerlin() {
  const res: IPhoto[] = yield call(getPhotos, "berlin");
  yield put(getPhotosSuccessBerlin(res));
}
function* getPhotoMoscow() {
  const res: IPhoto[] = yield call(getPhotos, "moscow");
  yield put(getPhotosSuccessMoscow(res));
}
function* getPhotoWorker() {
  yield call(getPhotoLondon);
  yield call(getPhotoParis);
  yield call(getPhotoBerlin);
  yield call(getPhotoMoscow);
}

export function* photoWatcher() {
  yield takeEvery("photos/getPhotosFetch", getPhotoWorker);
}
