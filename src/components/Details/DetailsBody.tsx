import React from "react";
import {
  CloseButton,
  Description,
  DescriptionContainer,
  Image,
  ImageContainer,
  Title
} from "./Details.styles";

interface DetailsBodyProps {
  successLoaded: boolean;
  title: string;
  webImageUrl: string;
  description: string;
  closePopup: () => void;
}

interface InfoProps {
  title: string;
  webImageUrl: string;
  description: string;
}
const noDataNotification = "Could not open image details";

const Info: React.FC<InfoProps> = ({
  title,
  webImageUrl,
  description
}): React.ReactElement => {
  return (
    <>
      <Title>{title}</Title>
      <ImageContainer>
        <Image src={webImageUrl} />
      </ImageContainer>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </>
  );
};

const DetailsBody: React.FC<DetailsBodyProps> = ({
  successLoaded,
  title,
  webImageUrl,
  description,
  closePopup
}): React.ReactElement => (
  <>
    {!successLoaded ? (
      <Title>{noDataNotification}</Title>
    ) : (
      <Info title={title} webImageUrl={webImageUrl} description={description} />
    )}
    <CloseButton type="button" onClick={closePopup}>
      Close
    </CloseButton>
  </>
);

export default DetailsBody;
