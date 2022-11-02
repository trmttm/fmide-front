import * as setting from "../setting";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { accountFactory, accounts } from "../entities/accounts";

type propsModalAddNewAccount = { show?: boolean; handleClose?: () => void };

export function ModalAddNewAccount(props: propsModalAddNewAccount) {
  const [lShow, setLShow] = useState(true);

  const show = props.show === undefined ? lShow : props.show;
  const handleClose =
    props.handleClose === undefined ? () => setLShow : props.handleClose;
  const [userInput, setUserInput] = useState("");

  function updateUserInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  function addNewAccountAndClose() {
    accounts.push(accountFactory(userInput));
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
        <Button variant="primary" onClick={addNewAccountAndClose}>
          {setting.btnTextOk}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
