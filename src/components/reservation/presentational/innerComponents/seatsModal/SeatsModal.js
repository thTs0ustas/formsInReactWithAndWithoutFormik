import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { keys } from "lodash";
import PropTypes from "prop-types";
import { ContinueButton } from "../../../../../theme";
import { ModalContainer } from "../../styledComponents";

function SeatsModal({ children, disabled, sum, seat }) {
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

      <ModalContainer show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <ModalHeader closeButton>
          <Modal.Title>SELECT YOU SEATS</Modal.Title>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <Modal.Footer>
          <p>
            can choose{" "}
            <strong>
              {sum - keys(seat).length > -1 ? sum - keys(seat).length : "Deselect some seats"}
            </strong>{" "}
            more seat(s)
          </p>
        </Modal.Footer>
      </ModalContainer>
    </>
  );
}

SeatsModal.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  sum: PropTypes.number.isRequired,
  seat: PropTypes.object.isRequired,
};
export { SeatsModal };
