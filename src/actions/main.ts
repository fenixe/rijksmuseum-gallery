import { createAction } from "@reduxjs/toolkit";
import { ItemsPerPage } from "../reducers/itemsPerPageReducer";
import { ImagesListData } from "../reducers/imagesListReducer";
import { ACTIONS } from "../constants";

export const setItemsPerPage = createAction<ItemsPerPage>(
	ACTIONS.CHANGE_ITEMS_QUANTITY
);

export const getImagesList = createAction<ItemsPerPage>(
	ACTIONS.GET_IMAGES_LIST
);

export const imagesLoaded = createAction<ImagesListData>(ACTIONS.IMAGES_LOADED);

// export const selectImage = createAction<ItemsPerPage>(ACTIONS.IMAGE_SELECTED);
