import React, { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import SearchButton from "./SearchButton";
import { SearchContainer, Input } from "./SearchBox.styles";
import { setSearchAction } from "../../actions";

const SearchBox: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const handledChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleButton = () => {
    dispatch(setSearchAction({ query }));
  };

  return (
    <SearchContainer>
      <Input
        type="search"
        placeholder="Search keywords..."
        value={query}
        onChange={handledChange}
      />
      <SearchButton onSearchAction={handleButton} />
    </SearchContainer>
  );
};

export default SearchBox;
