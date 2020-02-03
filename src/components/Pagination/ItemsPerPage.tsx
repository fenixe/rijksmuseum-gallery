import React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { setItemsPerPageAction } from "../../actions";
import { ITEMS_PER_PAGE_ARRAY } from "../../constants";
import { getPageLimit } from "../../selectors";
import { ItemsPerPageWrapper, QuantityButton } from "./Pagination.styles";

const ItemsPerPage: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const pageLimit = useSelector(getPageLimit);

  const handleButton = (quantity: number) => {
    dispatch(setItemsPerPageAction({ pageLimit: quantity }));
  };

  return (
    <ItemsPerPageWrapper>
      {ITEMS_PER_PAGE_ARRAY.map(quantity => {
        return (
          <QuantityButton
            onClick={() => {
              handleButton(quantity);
            }}
            className={quantity === pageLimit ? "active" : ""}
            key={quantity}
          >
            {quantity}
          </QuantityButton>
        );
      })}
    </ItemsPerPageWrapper>
  );
};

export default ItemsPerPage;
