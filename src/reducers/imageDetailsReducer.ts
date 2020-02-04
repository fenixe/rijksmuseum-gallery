import { createReducer } from "@reduxjs/toolkit";
import { getImageDetailsAction, imageDetailsAction } from "../actions";
import { ImageDetailsRequest, Status } from "../sagas";

export interface ImageData {
  id: string;
  title: string;
  description: string;
  webImageUrl: string;
  status: {
    isLoaded: boolean;
    successLoaded: boolean;
  };
}

export interface ImageDetails extends ImageDetailsRequest {
  imageData?: ImageData;
  status: Status;
}

const initialState: ImageDetails = {
  imageId: "",
  status: {
    isLoaded: false,
    successLoaded: false
  }
};

const imageDetailsReducer = createReducer(initialState, {
  [imageDetailsAction.type]: (
    state: ImageDetails,
    action: ReturnType<typeof imageDetailsAction>
  ) => {
    const {
      payload: { imageData, status }
    } = action;

    return {
      ...state,
      status,
      imageData
    };
  },
  [getImageDetailsAction.type]: (
    state: ImageDetails,
    action: ReturnType<typeof getImageDetailsAction>
  ) => {
    const {
      payload: { imageId }
    } = action;

    return {
      ...state,
      imageId
    };
  }
});

export default imageDetailsReducer;
