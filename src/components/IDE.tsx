import React, { useState } from "react";
import * as setting from "../setting";
import Button from "react-bootstrap/Button";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { Draggable } from "./Draggable";
import { accounts } from "../states";

function addNewAccountButton(accountName: string) {
  return (
    <Draggable>
      <Button variant="secondary">{accountName}</Button>
    </Draggable>
  );
}

export function IDE() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Draggable>
        <Button variant="secondary" onClick={handleShow}>
          {setting.btnTextAddNewAccount}
        </Button>
      </Draggable>
      <ModalAddNewAccount show={show} handleClose={handleClose} />
      {accounts.map(addNewAccountButton)}
    </div>
  );
}
