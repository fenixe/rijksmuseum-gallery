import { all, fork } from "redux-saga/effects";
import { watchForLoadImages } from "./main";

export const rootSaga = function* root() {
  yield all([fork(watchForLoadImages)]);
};
