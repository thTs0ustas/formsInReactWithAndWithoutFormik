import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import PropTypes from "prop-types";
import { ContinueButton } from "../../../../../theme";
import { GuestModalContainer } from "../../styledComponents";

function GuestModal({ children, disabled }) {
  const [showGuest, setShowGuest] = useState(false);

  const handleClose = () => setShowGuest(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShowGuest(true);
  };

  return (
    <>
      <ContinueButton disabled={disabled} onClick={handleShow}>
        Next
      </ContinueButton>

      <GuestModalContainer show={showGuest} onHide={handleClose} backdrop='static' keyboard={false}>
        <ModalHeader closeButton>
          <Modal.Title>FILL YOUR INFO</Modal.Title>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </GuestModalContainer>
    </>
  );
}

GuestModal.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export { GuestModal };
