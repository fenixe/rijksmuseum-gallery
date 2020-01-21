import React from "react";
import SearchButton from "./SearchButton";
import { SearchContainer, Input } from "./SearchBox.styles";

const SearchBox: React.FC = () => (
  <SearchContainer>
    <Input type="search" placeholder="Search keywords..." />
    <SearchButton />
  </SearchContainer>
);

export default SearchBox;
