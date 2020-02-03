import { RootState, ImageData } from "../reducers";

export const getPageLimit = (state: RootState): number =>
  state.itemsPerPage.pageLimit;
export const getTotalShowPages = (state: RootState): number =>
  state.pagination.totalShowPages;
export const getImagesList = (state: RootState): Array<ImageData> =>
  state.imagesLibrary.images;
export const getCurrentPage = (state: RootState): number =>
  state.pagination.currentPage;
export const getCountResult = (state: RootState): number =>
  state.pagination.count;
export const getSortOrder = (state: RootState): string => state.sortOrder.sort;
export const getQuery = (state: RootState): string => state.search.query;

export const selectImageById = (id: string | undefined) => (
  state: RootState
): ImageData | undefined => {
  const { images } = state.imagesLibrary;

  const selectedImage = images.find(item => {
    const { id: itemId } = item;
    return itemId === id;
  });

  return selectedImage;
};
