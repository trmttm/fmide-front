import React, { useState } from "react";
import * as setting from "../setting";
import Button from "react-bootstrap/Button";
import { ModalAddNewAccount } from "./ModalAddNewAccount";

export function IDE() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} variant="secondary">
        {setting.btnTextAddNewAccount}
      </Button>
      <ModalAddNewAccount show={show} handleClose={handleClose} />
    </div>
  );
}
