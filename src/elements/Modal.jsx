import React from "react";
import { Modal } from "react-bootstrap";

const MyModal = ({ title, children, setShow, show }) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default MyModal;
