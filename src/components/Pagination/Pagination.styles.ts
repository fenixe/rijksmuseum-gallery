import styled from "styled-components";
import { COMMON_TEXT_STYLES } from "../../constants";

export const PaginationContainer = styled.div`
  align-self: center;
  justify-self: center;
`;

const StyledButton = styled.button`
  ${COMMON_TEXT_STYLES};
  cursor: pointer;
  background-color: transparent;
  border: 0;
  font-size: calc(10px + 2vmin);
  text-decoration: none;
  color: white;

  &.active {
    color: #676767;
  }

  &:focus {
    outline: none;
  }
`;

export const PaginationButton = styled(StyledButton)`
  padding: 8px 16px;

  &.toggled {
    color: #676767;
  }
`;

export const QuantityButton = styled(StyledButton)`
  padding: 0 10px;
  border-right: 1px white solid;

  &:last-child {
    border: 0;
  }
`;

export const ItemsPerPageWrapper = styled.div`
  margin-right: 150px;
  align-self: center;
  justify-self: center;
  display: flex;
`;
