import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { ContinueButton } from "../../../../theme";
import { ModalContainer } from "../styledComponents/styles";
import { keys } from "lodash";

const SeatsModal = ({ children, disabled, sum, seat }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <ContinueButton disabled={!disabled} onClick={handleShow}>
        Next
      </ContinueButton>

      <ModalContainer
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <ModalHeader closeButton>
          <Modal.Title>SELECT YOU SEATS</Modal.Title>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <Modal.Footer>
          <p>
            Remaining seats{" "}
            <strong>
              {sum - keys(seat).length > -1
                ? sum - keys(seat).length
                : "Deselect some seats"}
            </strong>
          </p>
        </Modal.Footer>
      </ModalContainer>
    </>
  );
};

export { SeatsModal };
