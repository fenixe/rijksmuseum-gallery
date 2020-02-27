import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Window,
  Title,
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
import { ROUTES } from "../../constants";
import { selectImageById } from "../../selectors";

interface ModalWindowProps {
  closePopup: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  closePopup
}): React.ReactElement | null => {
  const history = useHistory();
  const { id } = useParams();
  const selectImage = useSelector(selectImageById(id));

  if (!selectImage) {
    history.push(ROUTES.GALLERY_URL);
    return null;
  }

  const { title, longTitle, webImageUrl } = selectImage || {};

  const viewDetails = () => {
    history.push(`${ROUTES.DETAILS_URL}/${id}`);
  };

  return (
    <Window>
      <Title>{title}</Title>
      <InfoGridContainer>
        <ImageContainer>
          <Image src={webImageUrl} />
        </ImageContainer>
        <DescriptionContainer>
          <Description>{longTitle}</Description>
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
