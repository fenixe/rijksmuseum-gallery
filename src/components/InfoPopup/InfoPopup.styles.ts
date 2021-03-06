import styled from "styled-components";
import { BUTTON_STYLE, COMMON_ALIGN_SELF_CENTER } from "../../constants";

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50;
`;

export const Window = styled.div`
  position: absolute;
  background: #fff;
  color: black;
  left: 50%;
  top: 50%;
  padding: 20px 20px 20px 30px;
  z-index: 100;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 6px 6px 17px 2px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.p`
  font-size: 1.6rem;
  margin-top: 0;
  text-align: center;
`;

export const InfoGridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 60px;
`;

export const ImageContainer = styled.div`
  ${COMMON_ALIGN_SELF_CENTER};
  grid-area: 1 / 1 / 2 / 2;
`;

export const Image = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  ${COMMON_ALIGN_SELF_CENTER};
  grid-area: 1 / 2 / 2 / 3;
  padding: 0 20px;
  overflow: auto;
`;

export const DetailsButtonContainer = styled.div`
  ${COMMON_ALIGN_SELF_CENTER};
  grid-area: 2 / 1 / 3 / 2;
`;

export const CloseButtonContainer = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  align-self: center;
  justify-self: end;
`;

export const Description = styled.div`
  font-size: 1.4rem;
`;

export const CloseButton = styled(BUTTON_STYLE)`
  width: 200px;
  background-color: rgb(169, 169, 169, 0.8);
  &:hover {
    background-color: darkgrey;
  }
`;

export const DetailsButton = styled(BUTTON_STYLE)`
  width: 200px;
`;
