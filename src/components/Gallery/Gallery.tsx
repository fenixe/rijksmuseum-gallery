import React from "react";
import SortField from "../SortField";
import SearchBox from "../SearchBox";
import ImagesList from "../ImagesList";
import Pagination from "../Pagination";
import {
  PreviewContainer,
  ImageListContainer,
  PaginationContainer
} from "./Gallery.styles";

export const Gallery: React.FC = (): React.ReactElement => (
  <PreviewContainer>
    <SortField />

    <SearchBox />

    <ImageListContainer>
      <ImagesList />
    </ImageListContainer>

    <PaginationContainer>
      <Pagination />
    </PaginationContainer>
  </PreviewContainer>
);
