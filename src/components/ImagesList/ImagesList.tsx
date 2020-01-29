import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Image from "./Image";
import { ImagesListContainer } from "./ImagesList.styles";
import { RootState } from "../../reducers";
import { getImagesList } from "../../actions";

const ImagesList: React.FC = (): React.ReactElement => {
  const imagesList = useSelector(
    (state: RootState) => state.imagesLibrary.images
  );

  const quantity = useSelector(
    (state: RootState) => state.itemsPerPage.quantity
  );

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImagesList({ quantity }));
  }, [dispatch, quantity]);

  return (
    <ImagesListContainer>
      {imagesList.map((data, index) => (
        <Image key={data.id} {...data} />
      ))}
    </ImagesListContainer>
  );
};

export default ImagesList;
