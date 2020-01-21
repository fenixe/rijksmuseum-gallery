import React from "react";
import {
  Window,
  DetailsButtonContainer,
  InfoGridContainer,
  ImageContainer,
  DescriptionContainer,
  CloseButtonContainer,
  DetailsButton,
  CloseButton,
  Description,
  Image
} from "./InfoPopup.styles";
import { useHistory, useParams } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";

interface ModalWindowProps {
  closePopup: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  closePopup
}): React.ReactElement => {
  const history = useHistory();
  const { id } = useParams();

  const viewDetails = () => {
    history.push(`${ROUTES.DETAILS_URL}/${id}`);
  };

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

  return (
    <Window>
      <InfoGridContainer>
        <ImageContainer>
          <Image src={imgSrc} />
        </ImageContainer>
        <DescriptionContainer>
          <Description>{title}</Description>
        </DescriptionContainer>
        <DetailsButtonContainer>
          <DetailsButton type="button" onClick={viewDetails}>
            View more details
          </DetailsButton>
        </DetailsButtonContainer>
        <CloseButtonContainer>
          <CloseButton type="button" onClick={closePopup}>
            Close
          </CloseButton>
        </CloseButtonContainer>
      </InfoGridContainer>
    </Window>
  );
};

export default ModalWindow;
