import React from "react";
import ItemsPerPage from "./ItemsPerPage";
import { PaginationPanel, PaginationPanelItem } from "./Pagination.styles";

const Pagination: React.FC = () => (
  <>
    <PaginationPanel>
      <PaginationPanelItem>&laquo;</PaginationPanelItem>
      <PaginationPanelItem className={"active"}>1</PaginationPanelItem>
      <PaginationPanelItem>2</PaginationPanelItem>
      <PaginationPanelItem>3</PaginationPanelItem>
      <PaginationPanelItem>4</PaginationPanelItem>
      <PaginationPanelItem>&raquo;</PaginationPanelItem>
    </PaginationPanel>
    <ItemsPerPage />
  </>
);

export default Pagination;
