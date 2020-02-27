import React from "react";
import ItemsPerPage from "./ItemsPerPage";
import PaginationPanel from "./PaginationPanel";

export const Pagination: React.FC = (): React.ReactElement => (
  <>
    <PaginationPanel />
    <ItemsPerPage />
  </>
);
