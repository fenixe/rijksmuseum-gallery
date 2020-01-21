import React from "react";
import {
  DetailsContainer,
  Title,
  ImageContainer,
  Image,
  DescriptionContainer,
  Description,
  Category,
  Tags,
  CloseButton
} from "./Details.styles";

import { ROUTES } from "../../constants/ROUTES";
import { useHistory } from "react-router-dom";

const imgSrc: string =
  "https://rijks-qms-frontend.azureedge.net/assets/70a9dfb8-c5ac-4ec1-ab18-341617954c39?w=990&h=660&c=8b03c4c423a54cd2e2c3ca9835d9349aefa8be0b6b5e28f43414a93f5ac48057";

const title: string =
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "Specifying a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.\n" +
  "\n" +
  "In order for overflow to have an effect, the block-level container must have either a set height (height or max-height) or white-space set to nowrap.";

const Details: React.FC = (): React.ReactElement => {
  let history = useHistory();
  const closePopup = () => {
    history.push(ROUTES.GALLERY_URL);
  };

  return (
    <DetailsContainer>
      <Title>{"Paint Name"}</Title>
      <ImageContainer>
        <Image src={imgSrc} />
      </ImageContainer>
      <DescriptionContainer>
        <Description>{title}</Description>
      </DescriptionContainer>
      <Category>Category: {"category category"}</Category>
      <Tags>Tags: {"tags tags tags"}</Tags>
      <CloseButton type="button" onClick={closePopup}>
        Close
      </CloseButton>
    </DetailsContainer>
  );
};

export default Details;
