import { all, fork } from "redux-saga/effects";
import { watchForLoadImages } from "./loadImages";

export const rootSaga = function* root() {
  yield all([fork(watchForLoadImages)]);
};

export * from "./loadImages";
