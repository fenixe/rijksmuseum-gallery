import styled from "styled-components";

export const PaginationPanel = styled.div`
  align-self: center;
  justify-self: center;
`;

export const PaginationPanelItem = styled.span`
  cursor: pointer;
  padding: 8px 16px;
  text-decoration: none;

  &.active {
    color: #676767;
  }
`;

export const Item = styled.span`
  padding: 0 15px;
  border-right: 1px white solid;
  cursor: pointer;

  &:last-child {
    border: 0;
  }

  &.active {
    color: #676767;
  }
`;

export const ItemsPerPageWrapper = styled.div`
  margin-right: 150px;
  align-self: center;
  justify-self: center;
`;
