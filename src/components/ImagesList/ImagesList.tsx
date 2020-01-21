import React from "react";
import Image from "./Image";
import { ImagesListContainer } from "./ImagesList.styles";

const ImagesList: React.FC = (): React.ReactElement => {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(<Image key={i} imgId={i} />);
  }

  return <ImagesListContainer>{array}</ImagesListContainer>;
};

export default ImagesList;
