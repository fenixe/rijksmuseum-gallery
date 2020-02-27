import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getImagesListAction } from "../../actions";
import {
  selectCountResult,
  selectCurrentPage,
  selectImagesList,
  selectImagesListStatus,
  selectPageLimit,
  selectQuery,
  selectSortOrder
} from "../../selectors";
import Image from "./Image";
import { ImagesListContainer, Notification } from "./ImagesList.styles";
import Spinner from "../Spinner";

export const ImagesList: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const imagesList = useSelector(selectImagesList);
  const currentPage = useSelector(selectCurrentPage);
  const countResult = useSelector(selectCountResult);
  const itemsPerPage = useSelector(selectPageLimit);
  const sort = useSelector(selectSortOrder);
  const status = useSelector(selectImagesListStatus);

  const query = useSelector(selectQuery);

  const { isLoaded, successLoaded } = status;

  useEffect(() => {
    dispatch(getImagesListAction({ itemsPerPage, currentPage, sort, query }));
  }, [dispatch, itemsPerPage, currentPage, sort, query]);

  const noDataNotification = "No art object could be found by your query";

  return (
    <>
      {isLoaded ? (
        <Spinner />
      ) : (
        <ImagesListContainer>
          {countResult === 0 || !successLoaded ? (
            <Notification>{noDataNotification}</Notification>
          ) : (
            imagesList.map(data => <Image key={data.id} {...data} />)
          )}
        </ImagesListContainer>
      )}
    </>
  );
};
