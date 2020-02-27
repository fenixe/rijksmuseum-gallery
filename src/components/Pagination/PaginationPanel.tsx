import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchPageNumbers } from "../../helpers";
import { setCurrentPageAction } from "../../actions";
import { selectCurrentPage, selectTotalShowPages } from "../../selectors";
import NavigationButton from "./NavigationButton";
import { PaginationContainer, PaginationButton } from "./Pagination.styles";

const PaginationPanel: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const totalShowPages = useSelector(selectTotalShowPages);
  const currentPage = useSelector(selectCurrentPage);

  const setCurrentPage = (page: number) => {
    dispatch(setCurrentPageAction({ currentPage: page }));
  };

  const pages = fetchPageNumbers(totalShowPages, currentPage);

  const onNavigationButtonClick = (pageNumber: number) => {
    if (pageNumber < 1) {
      pageNumber = 1;
    } else if (pageNumber > totalShowPages) {
      pageNumber = totalShowPages;
    }

    setCurrentPage(pageNumber);
  };

  return (
    <PaginationContainer>
      <NavigationButton
        navigationHandle={() => {
          onNavigationButtonClick(currentPage - 1);
        }}
      >
        &laquo;
      </NavigationButton>
      {pages.map(page => {
        if (page < 0) {
          return "...";
        } else {
          return (
            <PaginationButton
              onClick={() => {
                setCurrentPage(page);
              }}
              className={page === currentPage ? "active" : ""}
              key={page}
            >
              {page}
            </PaginationButton>
          );
        }
      })}
      <NavigationButton
        navigationHandle={() => {
          onNavigationButtonClick(currentPage + 1);
        }}
      >
        &raquo;
      </NavigationButton>
    </PaginationContainer>
  );
};

export default PaginationPanel;
