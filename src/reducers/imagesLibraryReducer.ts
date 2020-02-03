import { createReducer } from "@reduxjs/toolkit";
import { getImagesListAction, imagesLoadedAction } from "../actions";

export interface ImageData {
  id: string;
  title: string;
  longTitle: string;
  headerImageUrl: string;
  webImageUrl: string;
}

export interface ImagesListData {
  images: Array<ImageData>;
}

export const initialState: ImagesListData = {
  images: []
};

const imagesLibraryReducer = createReducer(initialState, {
  [imagesLoadedAction.type]: (
    state: ImagesListData,
    action: ReturnType<typeof imagesLoadedAction>
  ) => {
    const {
      payload: { images }
    } = action;

    return {
      ...state,
      images
    };
  },
  [getImagesListAction.type]: (
    state: ImagesListData,
    action: ReturnType<typeof getImagesListAction>
  ) => {
    const {
      payload: { pageLimit, currentPage, sort, query }
    } = action;

    return {
      ...state,
      pageLimit,
      currentPage,
      sort,
      query
    };
  }
});

export default imagesLibraryReducer;
