import { put, take, fork } from "redux-saga/effects";
import { ACTIONS } from "../constants";
import { generateCollectionUrl } from "../helpers";
import { ImageListData } from "../reducers";

export interface WebImage {
  url: string;
}

export interface Status {
  successLoaded: boolean;
  isLoaded: boolean;
}

export interface ImageResponseData {
  objectNumber: string;
  title: string;
  longTitle: string;
  headerImage: WebImage;
  webImage: WebImage;
}

export interface ImagesListRequest {
  itemsPerPage: number;
  currentPage: number;
  sort?: string;
  query?: string;
}

export interface ImagesResponseData {
  count?: number;
  images?: Array<ImageListData>;
  status: Status;
}

const fetchImages = async (
  params: ImagesListRequest
): Promise<ImagesResponseData> => {
  let url = generateCollectionUrl(params);
  let json;

  const status = {
    successLoaded: false,
    isLoaded: false
  };

  try {
    const response = await fetch(url);
    json = await response.json();
  } catch (e) {
    return { status };
  }

  const { count, artObjects } = json;

  const images = artObjects.map((data: ImageResponseData) => {
    const { objectNumber: id, title, longTitle, headerImage, webImage } = data;
    const { url: webImageUrl } = webImage || {};
    const { url: headerImageUrl } = headerImage || {};

    return {
      id,
      title,
      longTitle,
      headerImageUrl,
      webImageUrl
    };
  });

  status.successLoaded = true;

  return { count, images, status };
};

export function* loadImages(params: ImagesListRequest) {
  yield put({
    type: ACTIONS.IMAGES_LOADED,
    payload: { status: { isLoaded: true, successLoaded: false } }
  });

  const data: ImagesResponseData = yield fetchImages(params);
  const { images, count, status } = data;
  const { itemsPerPage } = params;

  yield put({
    type: ACTIONS.IMAGES_LOADED,
    payload: { images, status }
  });
  yield put({ type: ACTIONS.GET_NUMBER_PAGES, payload: { count, itemsPerPage } });
}

export function* watchForLoadImages() {
  while (true) {
    const input = yield take(ACTIONS.GET_IMAGES_LIST);
    const params = input.payload;

    yield fork(loadImages, params);
  }
}
