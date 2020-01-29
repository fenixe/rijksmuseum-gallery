import React, { useEffect, useState } from "react";
import { PaginationButton } from "./Pagination.styles";

interface NavigationButtonProps {
  navigationHandle: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  navigationHandle,
  children
}): React.ReactElement => {
  const [condition, setCondition] = useState(false);

  const onToggleButton = (): void => {
    setCondition(!condition);
    navigationHandle();
  };

  useEffect(() => {
    let timer: number;
    if (condition) {
      timer = setTimeout(() => setCondition(false), 300);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [condition]);

  return (
    <PaginationButton
      onClick={onToggleButton}
      className={condition ? "toggled" : ""}
    >
      {children}
    </PaginationButton>
  );
};

export default NavigationButton;
