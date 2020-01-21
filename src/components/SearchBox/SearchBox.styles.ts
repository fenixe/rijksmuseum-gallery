import styled from "styled-components";

import { BUTTON_STYLE, SHARED_SEARCH_STYLES } from "../../constants/STYLES";

export const SearchContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 1.5fr 1fr;
  max-height: 40px;
`;

export const Input = styled.input`
  ${SHARED_SEARCH_STYLES};
  min-width: 500px;
  color: #777;
  padding: 0 10px;
  background-color: #fff;
  box-shadow: 1px 4px 10px -2px rgba(0, 0, 0, 0.2);
  transition: max-height 0.5s ease-out;
`;

export const Button = styled(BUTTON_STYLE)`
  margin-left: 15px;
`;
