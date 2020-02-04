import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ROUTES } from "../../constants";
import { getImageData, getImageDataStatus } from "../../selectors";
import { getImageDetailsAction } from "../../actions";
import DetailsBody from "./DetailsBody";
import Spinner from "../Spinner";
import { DetailsContainer } from "./Details.styles";

const Details: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const dispatch: Dispatch = useDispatch();
  const { id = "" } = useParams();

  const imageData = useSelector(getImageData);
  const status = useSelector(getImageDataStatus);

  const { isLoaded, successLoaded } = status;

  const { title = "", description = "", webImageUrl = "" } = imageData;

  useEffect(() => {
    dispatch(getImageDetailsAction({ imageId: id }));
  }, [dispatch, id]);

  const closePopup = () => {
    history.push(ROUTES.GALLERY_URL);
  };

  return (
    <>
      {isLoaded ? (
        <Spinner />
      ) : (
        <DetailsContainer>
          <DetailsBody
            successLoaded={successLoaded}
            closePopup={closePopup}
            title={title}
            description={description}
            webImageUrl={webImageUrl}
          />
        </DetailsContainer>
      )}
    </>
  );
};

export default Details;
