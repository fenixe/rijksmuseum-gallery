import React, { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { ItemsPerPageWrapper, QuantityButton } from "./Pagination.styles";
import { setItemsPerPage } from "../../actions";
import { RootState } from "../../reducers";
import { ITEMS_PER_PAGE_ARRAY } from "../../constants";

const ItemsPerPage: React.FC = (): React.ReactElement => {
  const quantity = useSelector(
    (state: RootState) => state.itemsPerPage.quantity
  );
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const dispatch: Dispatch = useDispatch();

  return (
    <ItemsPerPageWrapper>
      {ITEMS_PER_PAGE_ARRAY.map(quantity => {
        return (
          <QuantityButton
            onClick={() => {
              setCurrentQuantity(quantity);
              dispatch(setItemsPerPage({ quantity }));
            }}
            className={quantity === currentQuantity ? "active" : ""}
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
