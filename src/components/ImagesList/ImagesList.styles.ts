import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const CommonStyles = css`
  position: absolute;
  opacity: 0;
  transition: all 0.5s;
  left: 0;
  width: 100%;
`;

export const ImagesListContainer = styled.div`
  display: inline-grid;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(100px, 140px);
  overflow: auto;
  align-self: flex-start;
`;

export const StyledImage = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto auto;
`;

export const Title = styled.span`
  ${CommonStyles};
  color: black;
  z-index: 1;
  font-size: 18px;
  line-height: 1.4;
  column-width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  top: 0;
  height: 100%;
  padding: 80px 15px 0 15px;

  &:hover {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  overflow: hidden;
  position: relative;
  background-color: #adadad;

  &:after {
    ${CommonStyles};
    content: "";
    height: 50%;
    bottom: 0;
    background-color: rgba(195, 195, 195, 0.9);
  }

  &:hover:after {
    opacity: 0.6;
  }
`;

export const Notification = styled.p`
  justify-self: center;
  align-self: center;
`;
