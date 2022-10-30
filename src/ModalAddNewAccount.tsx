import * as setting from "./setting";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

type propsModalAddNewAccount = { show: boolean; handleClose: () => void };

export function ModalAddNewAccount(props: propsModalAddNewAccount) {
  let show = props.show;
  let handleClose = props.handleClose;

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{setting.titleAddNewAccount}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder={setting.defaultAccountName}
            autoFocus
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {setting.btnTextCancel}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {setting.btnTextOk}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
