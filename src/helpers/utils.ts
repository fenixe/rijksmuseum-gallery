import { API_KEY, API_URL, PAGE_NEIGHBOURS } from "../constants";
import { ImagesListRequest } from "../sagas";

export const generateCollectionUrl = ({
  pageLimit,
  currentPage,
  sort,
  query
}: ImagesListRequest): string => {
  let url = `${API_URL}?key=${API_KEY}&ps=${pageLimit}&p=${currentPage}`;

  if (sort) {
    url += `&s=${sort}`;
  } else if (query) {
    url += `&q=${query}`;
  }

  return url;
};

export const generateDetailsUrl = (imageId: string): string => {
  return `${API_URL}/${imageId}?key=${API_KEY}`;
};

export const fetchPageNumbers = (
  totalPages: number,
  currentPage: number
): Array<number> => {
  const showSDots = currentPage > PAGE_NEIGHBOURS + 1;
  const showEDots = currentPage < totalPages - PAGE_NEIGHBOURS;

  const pages = [1];

  if (totalPages < 1) {
    return pages;
  }

  if (showSDots) {
    pages.push(-1);
  } else {
    for (let i = 2; i < currentPage - 1; i++) {
      pages.push(i);
    }
  }

  if (currentPage > 2) {
    pages.push(currentPage - 1);
  }

  if (!pages.includes(currentPage)) {
    pages.push(currentPage);
  }

  if (currentPage < totalPages - 1) pages.push(currentPage + 1);

  if (showEDots) {
    pages.push(-1);
  } else {
    for (let i = currentPage + 2; i < totalPages; i++) {
      pages.push(i);
    }
  }

  if (currentPage !== totalPages) {
    pages.push(totalPages);
  }

  return pages;
};
