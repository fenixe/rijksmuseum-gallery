import { createReducer } from "@reduxjs/toolkit";
import { setSearchAction } from "../actions";

export interface Search {
  query: string;
}
const initialState: Search = {
  query: ""
};

const searchReducer = createReducer(initialState, {
  [setSearchAction.type]: (
    state: Search,
    action: ReturnType<typeof setSearchAction>
  ) => {
    const {
      payload: { query }
    } = action;
    return {
      ...state,
      query
    };
  }
});

export default searchReducer;
