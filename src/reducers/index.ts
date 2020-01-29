import { combineReducers } from "redux";
import itemsPerPageReducer from "./itemsPerPageReducer";
import imagesLibraryReducer from "./imagesListReducer";

const rootReducer = combineReducers({
  itemsPerPage: itemsPerPageReducer,
  imagesLibrary: imagesLibraryReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
