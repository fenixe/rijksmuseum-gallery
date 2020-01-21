import React from "react";
import { ModalBackground } from "./InfoPopup.styles";
import ModalWindow from "./ModalWindow";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";

const InfoPopup: React.FC = (): React.ReactElement => {
  let history = useHistory();

  const closePopup = () => {
    history.push(ROUTES.GALLERY_URL);
  };

  return (
    <>
      <ModalWindow closePopup={closePopup} />
      <ModalBackground onClick={closePopup} />
    </>
  );
};

export default InfoPopup;
