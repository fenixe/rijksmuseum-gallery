import { createAction } from "@reduxjs/toolkit";
import {
  ItemsPerPage,
  ImagesListData,
  TotalPagesData,
  CurrentPage,
  SortOrder,
  Search
} from "../reducers";
import { ACTIONS } from "../constants";
import { ImagesListRequest } from "../sagas";

export const getImagesListAction = createAction<ImagesListRequest>(
  ACTIONS.GET_IMAGES_LIST
);

export const setItemsPerPageAction = createAction<ItemsPerPage>(
  ACTIONS.CHANGE_PAGE_LIMIT
);

export const imagesLoadedAction = createAction<ImagesListData>(
  ACTIONS.IMAGES_LOADED
);

export const getTotalPagesAction = createAction<TotalPagesData>(
  ACTIONS.GET_NUMBER_PAGES
);

export const setCurrentPageAction = createAction<CurrentPage>(
  ACTIONS.SET_CURRENT_PAGE
);

export const setSortOrderAction = createAction<SortOrder>(
  ACTIONS.SET_SORT_ORDER
);

export const setSearchAction = createAction<Search>(ACTIONS.SET_QUERY);
