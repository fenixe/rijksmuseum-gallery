import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import { PaginationContainer, PaginationButton } from "./Pagination.styles";

const PaginationPanel: React.FC = (): React.ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);

  const pagesArray: Array<number> = [1, 2, 3, 4, 5, 6];

  return (
    <PaginationContainer>
      <NavigationButton
        navigationHandle={() => {
          console.log("prev");
        }}
      >
        &laquo;
      </NavigationButton>
      {pagesArray.map(item => {
        return (
          <PaginationButton
            onClick={() => {
              setCurrentPage(item);
            }}
            className={item === currentPage ? "active" : ""}
            key={item}
          >
            {item}
          </PaginationButton>
        );
      })}
      <NavigationButton
        navigationHandle={() => {
          console.log("next");
        }}
      >
        &raquo;
      </NavigationButton>
    </PaginationContainer>
  );
};

export default PaginationPanel;
