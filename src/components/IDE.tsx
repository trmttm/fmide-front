import React, { useState } from "react";
import * as setting from "../setting";
import { Lines, typeLine } from "../setting";
import Button from "react-bootstrap/Button";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { Draggable } from "./Draggable";
import { Account, accounts } from "../states";
import { Line } from "./Line";

function addNewAccountButton(account: Account) {
  return (
    <Draggable key={"draggable-account-" + account.id}>
      <Button variant="secondary" key={account.id}>
        {account.name}
      </Button>
    </Draggable>
  );
}

function addLines(line: typeLine) {
  return (
    <Line
      key={line.id}
      id={line.id}
      x={line.x}
      y={line.y}
      width={line.width}
      angle={line.angle}
    />
  );
}

export function IDE() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id={"IDE"}>
      {Lines.map(addLines)}
      <Draggable key={"draggable-" + setting.btnTextAddNewAccount}>
        <Button variant="secondary" onClick={handleShow}>
          {setting.btnTextAddNewAccount}
        </Button>
      </Draggable>
      <ModalAddNewAccount show={show} handleClose={handleClose} />
      {accounts.map(addNewAccountButton)}
    </div>
  );
}
