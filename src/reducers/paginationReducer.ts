import { createReducer } from "@reduxjs/toolkit";
import { getTotalPagesAction, setCurrentPageAction } from "../actions";
import { MAX_RESULT_ITEMS } from "../constants";

export interface TotalPagesData {
  count: number;
  itemsPerPage: number;
}

export interface CurrentPage {
  currentPage: number;
}

export interface Pagination {
  totalShowPages: number;
  currentPage: number;
  count: number;
}

const initialState: Pagination = {
  totalShowPages: 1,
  currentPage: 1,
  count: 0
};

const paginationReducer = createReducer(initialState, {
  [getTotalPagesAction.type]: (
    state: Pagination,
    action: ReturnType<typeof getTotalPagesAction>
  ) => {
    const {
      payload: { count, itemsPerPage }
    } = action;

    let totalShowPages = Math.ceil(count / itemsPerPage);
    totalShowPages = Math.min(totalShowPages, MAX_RESULT_ITEMS / itemsPerPage);

    return {
      ...state,
      totalShowPages,
      count
    };
  },
  [setCurrentPageAction.type]: (
    state: Pagination,
    action: ReturnType<typeof setCurrentPageAction>
  ) => {
    const {
      payload: { currentPage }
    } = action;

    return {
      ...state,
      currentPage
    };
  }
});

export default paginationReducer;
