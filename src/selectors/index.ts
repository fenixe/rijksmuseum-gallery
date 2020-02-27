import { RootState, ImageListData, ImageData } from "../reducers";
import { Status } from "../sagas";

export const selectPageLimit = (state: RootState): number =>
  state.itemsPerPage.pageLimit;
export const selectTotalShowPages = (state: RootState): number =>
  state.pagination.totalShowPages;
export const selectImagesList = (state: RootState): Array<ImageListData> =>
  state.imagesLibrary.images;
export const selectCurrentPage = (state: RootState): number =>
  state.pagination.currentPage;
export const selectCountResult = (state: RootState): number =>
  state.pagination.count;
export const selectSortOrder = (state: RootState): string =>
  state.sortOrder.sort;
export const selectQuery = (state: RootState): string => state.search.query;
export const selectImageData = (state: RootState): ImageData =>
  (state.imageDetails.imageData as ImageData) || {};
export const selectImageDataStatus = (state: RootState): Status =>
  state.imageDetails.status;
export const selectImagesListStatus = (state: RootState): Status =>
  state.imagesLibrary.status;

export const selectImageById = (id: string | undefined) => (
  state: RootState
): ImageListData | undefined => {
  const { images } = state.imagesLibrary;

  const selectedImage = images.find(item => {
    const { id: itemId } = item;
    return itemId === id;
  });

  return selectedImage;
};
