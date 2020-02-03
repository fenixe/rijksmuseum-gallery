import React from "react";
import { Button } from "./SearchBox.styles";

interface SearchButtonProps {
  onSearchAction: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  onSearchAction
}): React.ReactElement => <Button onClick={onSearchAction}>Search</Button>;

export default SearchButton;
