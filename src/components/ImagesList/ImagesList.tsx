import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getImagesListAction } from "../../actions";
import {
  getCountResult,
  getCurrentPage,
  getImagesList,
  getPageLimit,
  getQuery,
  getSortOrder
} from "../../selectors";
import Image from "./Image";
import { ImagesListContainer, Notification } from "./ImagesList.styles";

const ImagesList: React.FC = (): React.ReactElement => {
  const imagesList = useSelector(getImagesList);
  const currentPage = useSelector(getCurrentPage);
  const countResult = useSelector(getCountResult);
  const pageLimit = useSelector(getPageLimit);
  const sort = useSelector(getSortOrder);
  const query = useSelector(getQuery);

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImagesListAction({ pageLimit, currentPage, sort, query }));
  }, [dispatch, pageLimit, currentPage, sort, query]);

  const noDataNotification = "No art object could be found by your query";

  return (
    <ImagesListContainer>
      {countResult === 0 ? (
        <Notification>{noDataNotification}</Notification>
      ) : (
        imagesList.map(data => <Image key={data.id} {...data} />)
      )}
    </ImagesListContainer>
  );
};

export default ImagesList;
