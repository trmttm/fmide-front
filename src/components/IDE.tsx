import React, { useState } from "react";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { getAccounts, typeAccount } from "../entities/accounts";
import { Line } from "./Line";
import {
  drawConnectorLine,
  getConnectorLine,
  getConnectorX1,
  getConnectorY1,
  getLines,
  typeLine,
} from "../entities/line";
import { Account } from "./Account";
import { Controller } from "./Controller";
import { Connectable } from "./Connectable";

export function IDE() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const commands = { addNewAccount: handleShow };
  return (
    <div
      id={"IDE"}
      onMouseMove={(e) =>
        drawConnectorLine(
          getConnectorX1(),
          getConnectorY1(),
          e.clientX,
          e.clientY
        )
      }
      style={{ backgroundColor: "yellow", height: "90vh" }}
    >
      <Line key={getConnectorLine().id} line={getConnectorLine()} />
      {getLines().map(addNewLineElement)}
      <Controller commands={commands} />
      <ModalAddNewAccount show={show} handleClose={handleClose} />
      {getAccounts().map(addNewAccountElement)}
    </div>
  );
}

function addNewLineElement(line: typeLine) {
  return <Line key={line.id} line={line} />;
}

export function addNewAccountElement(account: typeAccount) {
  return (
    <Connectable key={account.id} account={account}>
      <Account key={account.id} account={account} />
    </Connectable>
  );
}
