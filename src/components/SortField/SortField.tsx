import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import {
  SelectOrderContainer,
  SelectedValue,
  Icon,
  ContainerSelectList,
  SelectList,
  SelectListItem
} from "./SortField.styles";

const SortList: Array<string> = ["Order", "Order 2", "Order 3"];

const SortField: React.FC = (): React.ReactElement => {
  const [selectValue, setSelectValue] = useState();
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleMenu = (selectValue: number): void => {
    setSelectValue(selectValue);
    setIsListOpen(false);
  };

  const openSelect = (): void => {
    setIsListOpen(!isListOpen);
  };

  return (
    <SelectOrderContainer>
      {/*<Select>*/}
      {/*  <option value="">Select Order by:</option>*/}
      {/*  {SortList.map((item, index) => {*/}
      {/*    return (*/}
      {/*      <option key={index} value={index}>*/}
      {/*        {SortList[index]}*/}
      {/*      </option>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</Select>*/}
      <SelectedValue onClick={openSelect}>
        Order by: {SortList[selectValue]}
      </SelectedValue>
      <Icon onClick={openSelect} isOpen={isListOpen}>
        <FontAwesomeIcon icon={faAngleDown} />
      </Icon>
      <ContainerSelectList>
        <SelectList isOpen={isListOpen}>
          {SortList.map((item, index) => {
            return (
              <SelectListItem
                isActive={selectValue === index}
                onClick={() => toggleMenu(index)}
                key={index}
              >
                {item}
              </SelectListItem>
            );
          })}
        </SelectList>
      </ContainerSelectList>
    </SelectOrderContainer>
  );
};

export default SortField;
