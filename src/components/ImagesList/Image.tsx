import React from "react";
import { StyledImage, StyledLink, Title } from "./ImagesList.styles";
import { ROUTES } from "../../constants";
import { ImageListData } from "../../reducers";

const Image: React.FC<ImageListData> = ({
  id,
  title,
  headerImageUrl
}): React.ReactElement => {
  return (
    <StyledLink to={{ pathname: `${ROUTES.PREVIEW_URL}/${id}` }}>
      <Title>{title}</Title>
      <StyledImage src={headerImageUrl} />
    </StyledLink>
  );
};

export default Image;
