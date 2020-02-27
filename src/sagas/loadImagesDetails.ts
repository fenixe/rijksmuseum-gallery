import { put, take, fork } from "redux-saga/effects";
import { ACTIONS } from "../constants";
import { generateDetailsUrl } from "../helpers";
import { ImageData } from "../reducers";
import { Status } from "./loadImages";

export interface ImageDetailsRequest {
  imageId: string;
}

export interface ImagesDetailsResponse {
  imageData?: ImageData;
  status: Status;
}

const fetchImageDetails = async (
  params: ImageDetailsRequest
): Promise<ImagesDetailsResponse> => {
  const { imageId } = params;
  const url = generateDetailsUrl(imageId);
  let json;

  const status = {
    successLoaded: false,
    isLoaded: false
  };

  try {
    const response = await fetch(url);
    json = await response.json();
  } catch (e) {
    return {
      status
    };
  }

  const { artObject } = json;

  const {
    objectNumber: id,
    longTitle: title,
    plaqueDescriptionEnglish: description,
    webImage: { url: webImageUrl }
  } = artObject;

  status.successLoaded = true;

  const imageData = { status, webImageUrl, title, description, id };

  return { imageData, status };
};

export function* loadImageDetails(params: ImageDetailsRequest) {
  yield put({
    type: ACTIONS.GET_IMAGE_DETAILS,
    payload: { status: { isLoaded: true, successLoaded: false } }
  });

  const data = yield fetchImageDetails(params);

  const { imageData, status } = data;

  yield put({
    type: ACTIONS.GET_IMAGE_DETAILS,
    payload: { imageData, status }
  });
}

export function* watchForLoadImageDetails() {
  while (true) {
    const input = yield take(ACTIONS.SELECT_IMAGE_LOADED);
    const params = input.payload;

    yield fork(loadImageDetails, params);
  }
}
