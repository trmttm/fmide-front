import React, { useState } from "react";
import * as setting from "../setting";
import Button from "react-bootstrap/Button";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { Draggable } from "./Draggable";
import { accounts, typeAccount } from "../entities/accounts";
import { Line } from "./Line";
import { Lines, typeLine } from "../entities/line";
import { Account } from "./Account";

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

export function addNewAccountButton(account: typeAccount) {
  return <Account key={account.id} account={account} />;
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
