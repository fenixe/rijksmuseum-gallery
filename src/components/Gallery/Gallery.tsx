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

const Gallery: React.FC = () => (
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

export default Gallery;
