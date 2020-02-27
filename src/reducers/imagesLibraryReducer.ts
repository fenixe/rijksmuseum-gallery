import { createReducer } from "@reduxjs/toolkit";
import { getImagesListAction, imagesLoadedAction } from "../actions";
import { Status } from "../sagas";

export interface ImageListData {
  id: string;
  title: string;
  longTitle: string;
  headerImageUrl: string;
  webImageUrl: string;
}

export interface ImagesListData {
  images: Array<ImageListData>;
  status: Status;
}

export const initialState: ImagesListData = {
  images: [],
  status: {
    isLoaded: false,
    successLoaded: false
  }
};

const imagesLibraryReducer = createReducer(initialState, {
  [imagesLoadedAction.type]: (
    state: ImagesListData,
    action: ReturnType<typeof imagesLoadedAction>
  ) => {
    const {
      payload: { images, status }
    } = action;

    return {
      ...state,
      images,
      status
    };
  },
  [getImagesListAction.type]: (
    state: ImagesListData,
    action: ReturnType<typeof getImagesListAction>
  ) => {
    let {
      payload: { itemsPerPage, currentPage, sort, query }
    } = action;

    return {
      ...state,
      itemsPerPage,
      currentPage,
      sort,
      query
    };
  }
});

export default imagesLibraryReducer;
