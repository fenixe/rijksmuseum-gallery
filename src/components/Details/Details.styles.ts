import styled from "styled-components";
import { BUTTON_STYLE } from "../../constants/STYLES";

export const DetailsContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: scroll;
  grid-template-rows: minmax(50px, 80px) 1fr 60px;
  grid-template-columns: 1fr 1fr 0.5fr 0.5fr;
`;

export const Title = styled.h2`
  grid-area: 1 / 1 / 2 / 5;
  font-size: 1em;
  color: white;
  margin: 0;
  align-self: center;
  justify-self: center;
`;

export const ImageContainer = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;

export const Image = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  grid-area: 2 / 3 / 3 / 5;
  padding: 0 20px;
  overflow: auto;
`;

export const Description = styled.div`
  font-size: 18px;
`;

export const Category = styled.div`
  color: darkgray;
  grid-area: 3 / 1 / 4 / 1;
  align-self: center;
`;

export const Tags = styled.div`
  color: darkgray;
  grid-area: 3 / 2 / 4 / 4;
  align-self: center;
`;

export const CloseButton = styled(BUTTON_STYLE)`
  height: 40px;
  background-color: rgb(169, 169, 169, 0.8);
  align-self: center;
  &:hover {
    background-color: darkgrey;
  }
`;
