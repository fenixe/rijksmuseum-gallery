import { put, take, fork } from "redux-saga/effects";
import { ACTIONS, API_KEY, API_URL } from "../constants";
import { ImagesListData } from "../reducers/imagesListReducer";

interface WebImage {
  url: string;
}

interface ImageResponseData {
  id: string;
  title: string;
  headerImage: WebImage;
}

interface RequestParams {
  quantity: number;
}

const fetchImages = async ({
  quantity
}: RequestParams): Promise<ImagesListData> => {
  const response = await fetch(`${API_URL}?key=${API_KEY}&ps=${quantity}`);
  const json = await response.json();

  const images = json.artObjects.map((data: ImageResponseData) => {
    const {
      id,
      title,
      headerImage: { url }
    } = data;
    return {
      id,
      title,
      imageUrl: url
    };
  });
  return images;
};

export function* loadImages(params: RequestParams) {
  const images = yield fetchImages(params);
  yield put({ type: ACTIONS.IMAGES_LOADED, images });
}

export function* watchForLoadImages() {
  while (true) {
    const input = yield take(ACTIONS.GET_IMAGES_LIST);
    const {
      payload: { quantity }
    } = input;

    yield fork(loadImages, { quantity });
  }
}
