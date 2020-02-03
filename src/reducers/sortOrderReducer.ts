import { createReducer } from "@reduxjs/toolkit";
import { setSortOrderAction } from "../actions";

export interface SortOrder {
  sort: string;
}

const initialState: SortOrder = {
  sort: ""
};

const sortOrderReducer = createReducer(initialState, {
  [setSortOrderAction.type]: (
    state: SortOrder,
    action: ReturnType<typeof setSortOrderAction>
  ) => {
    const {
      payload: { sort }
    } = action;
    return {
      ...state,
      sort
    };
  }
});

export default sortOrderReducer;
