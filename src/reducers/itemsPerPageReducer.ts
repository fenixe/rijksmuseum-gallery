import { createReducer } from "@reduxjs/toolkit";
import { setItemsPerPage } from "../actions";
import { ITEMS_PER_PAGE_ARRAY } from "../constants";

export interface ItemsPerPage {
  quantity: number;
}

export const initialState: ItemsPerPage = {
  quantity: ITEMS_PER_PAGE_ARRAY[0]
};

const itemsPerPageReducer = createReducer(initialState, {
  [setItemsPerPage.type]: (
    state: ItemsPerPage,
    action: ReturnType<typeof setItemsPerPage>
  ) => {
    const {
      payload: { quantity }
    } = action;
    return {
      ...state,
      quantity
    };
  }
});

export default itemsPerPageReducer;
