import { call, fork, put, takeEvery } from "redux-saga/effects";
import { getPhotos } from "../api/api";
import {
  getPhotosSuccessLondon,
  getPhotosSuccessParis,
  getPhotosSuccessMoscow,
  getPhotosSuccessBerlin,
} from "../store/reducers/photoReducer";
import {
  getLondonError,
  getParisError,
  getBerlinError,
  getMoscowError,
} from "../store/reducers/errorReducer";

import { IPhoto } from "../types";

function* getPhotoLondon() {
  try {
    const res: IPhoto[] = yield call(getPhotos, "london");
    yield put(getPhotosSuccessLondon(res));
  } catch {
    yield put(getLondonError("Error fetching photos of London"));
  }
}
function* getPhotoParis() {
  try {
    const res: IPhoto[] = yield call(getPhotos, "paris");
    yield put(getPhotosSuccessParis(res));
  } catch {
    yield put(getParisError("Error fetching photos of Paris"));
  }
}
function* getPhotoBerlin() {
  try {
    const res: IPhoto[] = yield call(getPhotos, "berlin");
    yield put(getPhotosSuccessBerlin(res));
  } catch {
    yield put(getBerlinError("Error fetching photos of Berlin"));
  }
}
function* getPhotoMoscow() {
  try {
    const res: IPhoto[] = yield call(getPhotos, "moscow");
    yield put(getPhotosSuccessMoscow(res));
  } catch {
    yield put(getMoscowError("Error fetching photos of Moscow"));
  }
}
function* getPhotoWorker() {
  yield fork(getPhotoLondon);
  yield fork(getPhotoParis);
  yield fork(getPhotoBerlin);
  yield fork(getPhotoMoscow);
}

export function* photoWatcher() {
  yield takeEvery("photos/getPhotosFetch", getPhotoWorker);
}
