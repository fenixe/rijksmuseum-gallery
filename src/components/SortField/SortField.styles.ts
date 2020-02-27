import styled from "styled-components";

export const Icon = styled.span<{ isOpen: boolean }>`
  position: absolute;
  top: 10px;
  right: 5%;
  font-size: 1.3rem;
  transition: all 275ms;
  transform: rotate(${({ isOpen }) => (isOpen ? "180" : "0")}deg);
`;

export const SelectedValue = styled.p`
  padding: 11px 2%;
  width: 96%;
  display: block;
  margin: 0;
  cursor: pointer;
`;

export const SelectOrderContainer = styled.div`
  position: relative;
  float: left;
  min-width: 300px;
  font-size: 1rem;
  width: 300px;
  max-height: 40px;
  color: #777;
  font-weight: 300;
  background-color: #fff;
  box-shadow: 1px 2px 10px -2px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  transition: all 0.5s ease-in-out;
`;

export const ContainerSelectList = styled.div`
  position: relative;
  float: left;
  width: 100%;
`;

export const SelectList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: -12px;
  z-index: ${({ isOpen }) => (isOpen ? 3 : 1)};
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  width: 100%;
  background-color: #fff;
  padding: 12px 0 0 0;
  margin-bottom: 0;
  margin-top: 0;
  border-radius: 0 0 12px 12px;
  transition: max-height 0.5s ease-out;
`;

export const SelectListItem = styled.li<{ isActive: boolean }>`
  position: relative;
  float: left;
  width: 96%;
  border-bottom: 1px solid #e0e0e0;
  background-color: ${({ isActive }) => (isActive ? "#e2e2e2" : "#f5f5f5")};
  list-style-type: none;
  padding: 10px 2%;
  margin: 0;
  transition: all 275ms ease-in-out;
  display: block;
  cursor: pointer;

  &:last-child {
    border-radius: 0 0 12px 12px;
    border-bottom: 0;
  }

  &:hover {
    background-color: #eeeeee;
  }

  &.active {
    background-color: ;
  }
`;
