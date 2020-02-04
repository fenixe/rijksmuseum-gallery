import { all, fork } from "redux-saga/effects";
import { watchForLoadImages } from "./loadImages";
import { watchForLoadImageDetails } from "./loadImagesDetails";

export const rootSaga = function* root() {
  yield all([fork(watchForLoadImages), fork(watchForLoadImageDetails)]);
};

export * from "./loadImages";
export * from "./loadImagesDetails";
