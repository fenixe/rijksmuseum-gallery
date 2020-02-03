import { createReducer } from "@reduxjs/toolkit";
import { setItemsPerPageAction } from "../actions";
import { ITEMS_PER_PAGE_ARRAY } from "../constants";

export interface ItemsPerPage {
  pageLimit: number;
}

const initialState: ItemsPerPage = {
  pageLimit: ITEMS_PER_PAGE_ARRAY[0]
};

const itemsPerPageReducer = createReducer(initialState, {
  [setItemsPerPageAction.type]: (
    state: ItemsPerPage,
    action: ReturnType<typeof setItemsPerPageAction>
  ) => {
    const {
      payload: { pageLimit }
    } = action;
    return {
      ...state,
      pageLimit
    };
  }
});

export default itemsPerPageReducer;
