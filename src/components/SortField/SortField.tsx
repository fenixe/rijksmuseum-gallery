import React, { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { SORT_LIST } from "../../constants";
import { setSortOrderAction } from "../../actions";
import {
  SelectOrderContainer,
  SelectedValue,
  Icon,
  ContainerSelectList,
  SelectList,
  SelectListItem
} from "./SortField.styles";

export interface SortOrderItem {
  key: string;
  title: string;
}

const SortField: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const [selectValue, setSelectValue] = useState();
  const [isListOpen, setIsListOpen] = useState(false);

  const selectSortOrder = ({ key, title }: SortOrderItem): void => {
    setSelectValue(title);

    dispatch(setSortOrderAction({ sort: key }));

    setIsListOpen(false);
  };

  const openSelect = (): void => {
    setIsListOpen(!isListOpen);
  };

  return (
    <SelectOrderContainer>
      <SelectedValue onClick={openSelect}>
        Order by: {selectValue}
      </SelectedValue>
      <Icon onClick={openSelect} isOpen={isListOpen}>
        <FontAwesomeIcon icon={faAngleDown} />
      </Icon>
      <ContainerSelectList>
        <SelectList isOpen={isListOpen}>
          {SORT_LIST.map((item, index) => {
            return (
              <SelectListItem
                isActive={selectValue === index}
                onClick={() => selectSortOrder(item)}
                key={index}
              >
                {item.title}
              </SelectListItem>
            );
          })}
        </SelectList>
      </ContainerSelectList>
    </SelectOrderContainer>
  );
};

export default SortField;
