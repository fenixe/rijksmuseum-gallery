import React from "react";
import ItemsPerPage from "./ItemsPerPage";
import PaginationPanel from "./PaginationPanel";

const Pagination: React.FC = (): React.ReactElement => (
  <>
    <PaginationPanel />
    <ItemsPerPage />
  </>
);

export default Pagination;
