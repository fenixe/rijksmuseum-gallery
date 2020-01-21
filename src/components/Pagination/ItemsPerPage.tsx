import React from "react";
import { ItemsPerPageWrapper, Item } from "./Pagination.styles";

const ItemsPerPage: React.FC = () => (
  <ItemsPerPageWrapper>
    <Item className={"active"}>10</Item>
    <Item>50</Item>
    <Item>100</Item>
  </ItemsPerPageWrapper>
);

export default ItemsPerPage;
