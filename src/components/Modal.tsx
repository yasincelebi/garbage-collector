import React from "react";
import ReactDOM from "react-dom";
import { StyledModal } from "../styles/Modal";

const PortalModal = ({
  children,
  isOpen,
}: {
  children: React.ReactElement;
  isOpen: boolean;
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <StyledModal>
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "80%",
          maxHeight: "90%",
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        {children}
      </div>
    </StyledModal>,
    document.body
  );
};

export default PortalModal;
