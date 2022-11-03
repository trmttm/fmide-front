import React, { useState } from "react";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { getAccounts, typeAccount } from "../entities/accounts";
import { Line } from "./Line";
import { drawCLine, getCLine, getLines, typeLine } from "../entities/line";
import { Account } from "./Account";
import { Controller } from "./Controller";
import { Connectable } from "./Connectable";

export function IDE() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const commands = { addNewAccount: handleShow };
  const connectorLine = getCLine();
  const style = { backgroundColor: "yellow", height: "90vh" };
  return (
    <div id={"IDE"} onMouseMove={handleMouseMove} style={style}>
      <Line key={connectorLine.id} line={connectorLine} />
      {getLines().map(addNewLineElement)}
      <Controller commands={commands} />
      <ModalAddNewAccount show={showModal} handleClose={handleClose} />
      {getAccounts().map(addNewAccountElement)}
    </div>
  );
}

function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  drawCLine(e.clientX, e.clientY);
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
