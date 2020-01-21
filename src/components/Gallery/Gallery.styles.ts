import styled from "styled-components";

export const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: minmax(40px, auto) 1fr 80px;
  overflow: auto;
`;

export const PaginationContainer = styled.div`
  grid-area: 3 / 1 / 3 / 3;
  display: inline-grid;
  grid-template-columns: 1fr 30px;
  align-self: center;
`;

export const ImageListContainer = styled.div`
  align-self: stretch;
  justify-self: stretch;
  grid-template-columns: 1fr;
  grid-area: 2 / 1 / 3 / 3;
  margin-top: 20px;
  overflow: scroll;
`;
