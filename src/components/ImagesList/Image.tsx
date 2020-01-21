import React from "react";
import { StyledImage, StyledLink, Title } from "./ImagesList.styles";
import { ROUTES } from "../../constants/ROUTES";

const imgSrc: string =
  "https://rijks-qms-frontend.azureedge.net/assets/70a9dfb8-c5ac-4ec1-ab18-341617954c39?w=990&h=660&c=8b03c4c423a54cd2e2c3ca9835d9349aefa8be0b6b5e28f43414a93f5ac48057";
const title: string =
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "\n" +
  "In order for overflow to have an effect, the block-level container must have either a set height (height or max-height) or white-space set to nowrap.";

interface ImageProps {
  imgId: number;
}

const Image: React.FC<ImageProps> = ({ imgId }): React.ReactElement => {
  return (
    <StyledLink to={{ pathname: `${ROUTES.PREVIEW_URL}/${imgId}` }}>
      <Title>{title}</Title>
      <StyledImage src={imgSrc} />
    </StyledLink>
  );
};

export default Image;
