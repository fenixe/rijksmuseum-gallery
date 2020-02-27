import React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAction, setItemsPerPageAction } from "../../actions";
import { ITEMS_PER_PAGE_ARRAY, MAX_RESULT_ITEMS } from "../../constants";
import { selectCurrentPage, selectPageLimit } from "../../selectors";
import { ItemsPerPageWrapper, QuantityButton } from "./Pagination.styles";

const ItemsPerPage: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const pageLimit = useSelector(selectPageLimit);
  const currentPage = useSelector(selectCurrentPage);

  const handleButton = (quantity: number) => {
    dispatch(setItemsPerPageAction({ pageLimit: quantity }));

    if (quantity * currentPage >= MAX_RESULT_ITEMS) {
      dispatch(setCurrentPageAction({ currentPage: 1 }));
    }
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
