import { createReducer } from "@reduxjs/toolkit";
import { getImagesList, imagesLoaded } from "../actions";

export interface ImageData {
  id: string;
  title: string;
  imageUrl: string;
}

export interface ImagesListData {
  images: Array<ImageData>;
}

export const initialState: ImagesListData = {
  images: []
};

const imagesLibraryReducer = createReducer(initialState, {
  [imagesLoaded.type]: (state: ImagesListData, action: ImagesListData) => {
    const { images } = action;

    return {
      ...state,
      images
    };
  },
  [getImagesList.type]: (
    state: ImagesListData,
    action: ReturnType<typeof getImagesList>
  ) => {
    // const {
    //   payload: { images }
    // } = action;

    // console.log(state, action);

    return {
      ...state
      // images
    };
  }
});

export default imagesLibraryReducer;
