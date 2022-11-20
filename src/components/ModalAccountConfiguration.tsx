import * as setting from "../setting";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import {
  getHookShowAccountModification,
  modifyAccountName,
} from "../entities/accounts";
import * as presenter from "../presenter/Presenter";

export function ModalAccountConfiguration(props: { accountId: number }) {
  const accountId: number = props.accountId;
  const show = getHookShowAccountModification(accountId);
  const handleClose = () => presenter.closeAccountConfiguration(accountId);
  const [userInput, setUserInput] = useState("");

  function updateUserInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  function modifyAccountNameAndClose() {
    modifyAccountName(accountId, userInput);
    setUserInput("");
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{setting.titleAddNewAccount}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder={setting.defaultAccountName}
          onChange={updateUserInput}
          value={userInput}
          data-testid={setting.testIdInputAddNewAccount}
          autoFocus
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {setting.btnTextCancel}
        </Button>
        <Button variant="primary" onClick={modifyAccountNameAndClose}>
          {setting.btnTextOk}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
