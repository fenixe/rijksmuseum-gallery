import { combineReducers } from "redux";
import itemsPerPageReducer from "./itemsPerPageReducer";
import imagesLibraryReducer from "./imagesLibraryReducer";
import paginationReducer from "./paginationReducer";
import sortOrderReducer from "./sortOrderReducer";
import searchReducer from "./searchReducer";
import imageDetailsReducer from "./imageDetailsReducer";

const rootReducer = combineReducers({
  itemsPerPage: itemsPerPageReducer,
  imagesLibrary: imagesLibraryReducer,
  imageDetails: imageDetailsReducer,
  pagination: paginationReducer,
  sortOrder: sortOrderReducer,
  search: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
