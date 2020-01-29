import React from "react";
import { StyledImage, StyledLink, Title } from "./ImagesList.styles";
import { ROUTES } from "../../constants";
import { ImageData } from "../../reducers/imagesListReducer";

const Image: React.FC<ImageData> = ({
  id,
  title,
  imageUrl
}): React.ReactElement => {
  return (
    <StyledLink to={{ pathname: `${ROUTES.PREVIEW_URL}/${id}` }}>
      <Title>{title}</Title>
      <StyledImage src={imageUrl} />
    </StyledLink>
  );
};

export default Image;
