import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getImagesListAction } from "../../actions";
import {
  getCountResult,
  getCurrentPage,
  getImagesList,
  getImagesListStatus,
  getPageLimit,
  getQuery,
  getSortOrder
} from "../../selectors";
import Image from "./Image";
import { ImagesListContainer, Notification } from "./ImagesList.styles";
import Spinner from "../Spinner";

const ImagesList: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const imagesList = useSelector(getImagesList);
  const currentPage = useSelector(getCurrentPage);
  const countResult = useSelector(getCountResult);
  const pageLimit = useSelector(getPageLimit);
  const sort = useSelector(getSortOrder);
  const status = useSelector(getImagesListStatus);

  const query = useSelector(getQuery);

  const { isLoaded, successLoaded } = status;

  useEffect(() => {
    dispatch(getImagesListAction({ pageLimit, currentPage, sort, query }));
  }, [dispatch, pageLimit, currentPage, sort, query]);

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

export default ImagesList;
