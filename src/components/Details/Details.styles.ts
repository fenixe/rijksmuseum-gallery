import styled from "styled-components";
import { BUTTON_STYLE, COMMON_ALIGN_SELF_CENTER } from "../../constants";

export const DetailsContainer = styled.div`
  display: grid;
  width: 100%;
  padding-bottom: 10px;
  overflow: scroll;
  grid-template-rows: minmax(70px, 80px) 1fr 60px;
  grid-template-columns: 1fr 0.5fr;
`;

export const Title = styled.h2`
  ${COMMON_ALIGN_SELF_CENTER};
  grid-area: 1 / 1 / 2 / 4;
  font-size: 1.8rem;
  color: white;
  margin: 0;
`;

export const ImageContainer = styled.div`
  ${COMMON_ALIGN_SELF_CENTER};
  grid-area: 2 / 1 / 3 / 2;
`;

export const Image = styled.img`
  max-width: 70vw;
  max-height: 70vh;
`;

export const DescriptionContainer = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  padding: 0 20px;
  overflow: auto;
`;

export const Description = styled.div`
  font-size: 1.4rem;
`;

export const CloseButton = styled(BUTTON_STYLE)`
  ${COMMON_ALIGN_SELF_CENTER};
  grid-area: 3 / 2 / 4 / 4;
  justify-self: end;
  height: 40px;
  background-color: rgb(169, 169, 169, 0.8);
  &:hover {
    background-color: darkgrey;
  }
`;
