import { put, take, fork } from "redux-saga/effects";
import { ACTIONS } from "../constants";
import { generateUrl } from "../helpers";
import { ImageData } from "../reducers";

export interface WebImage {
  url: string;
}

export interface ImageResponseData {
  id: string;
  title: string;
  longTitle: string;
  headerImage: WebImage;
  webImage: WebImage;
}

export interface ImagesListRequest {
  pageLimit: number;
  currentPage: number;
  sort?: string;
  query?: string;
}

export interface ImagesResponseData {
  count: number;
  images: Array<ImageData>;
}

const fetchImages = async (
  params: ImagesListRequest
): Promise<ImagesResponseData> => {
  let url = generateUrl(params);

  const response = await fetch(url);
  const json = await response.json();

  const { count, artObjects } = json;

  const images = artObjects.map((data: ImageResponseData) => {
    const { id, title, longTitle, headerImage, webImage } = data;
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

  return { count, images };
};

export function* loadImages(params: ImagesListRequest) {
  const data = yield fetchImages(params);
  const { images, count } = data;
  const { pageLimit } = params;

  yield put({ type: ACTIONS.IMAGES_LOADED, payload: { images } });
  yield put({ type: ACTIONS.GET_NUMBER_PAGES, payload: { count, pageLimit } });
}

export function* watchForLoadImages() {
  // let currentPageLimit = 10;
  while (true) {
    const input = yield take(ACTIONS.GET_IMAGES_LIST);

    const params = input.payload;

    // console.log(currentPage, currentPageLimit);
    // if (pageLimit > currentPageLimit) {
    //   currentPage = 1;
    //   currentPageLimit = pageLimit;
    // }
    //
    // console.log(currentPage, currentPageLimit);

    yield fork(loadImages, params);
  }
}
