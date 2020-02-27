import styled, { css } from "styled-components";

export const COMMON_ALIGN_SELF_CENTER = css`
  align-self: center;
  justify-self: center;
`;

export const COMMON_TEXT_STYLES = css`
  font-size: 1rem;
  font-family: "Lobster", cursive;
  font-weight: 300;
`;

export const SHARED_SEARCH_STYLES = css`
  ${COMMON_TEXT_STYLES};
  border-radius: 12px;
  border: none;

  min-height: 40px;
  &:focus {
    outline: none;
  }
`;

export const BUTTON_STYLE = styled.button`
  ${SHARED_SEARCH_STYLES};
  cursor: pointer;
  background-color: #f57634;
  width: 150px;
  color: white;
  text-align: center;

  &:hover {
    background-color: #ff7647;
  }
`;
