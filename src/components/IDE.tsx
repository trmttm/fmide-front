import React, { useState } from "react";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { getAccounts, typeAccount } from "../entities/accounts";
import { Line } from "./Line";
import * as line from "../entities/line";
import { Account } from "./Account";
import { Controller } from "./Controller";
import { Connectable } from "./Connectable";
import * as states from "../entities/states";

export function IDE() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const commands = { addNewAccount: handleShow };
  const connectorLine = line.getCLine();
  const style = { backgroundColor: "white", height: "90vh" };
  const myRef: any = React.useRef(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (states.isConnectingMode()) {
      line.drawCLine(e.clientX, e.clientY - myRef.current.offsetTop);
    }
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (states.isConnectingMode()) {
      line.setConnectorX1(e.clientX);
      line.setConnectorY1(e.clientY - myRef.current.offsetTop);
    }
  }

  function handleMouseUp(e: React.MouseEvent<HTMLDivElement>) {
    states.turnOffConnectingMode();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Meta") {
      states.turnOnConnectingMode();
    }
  }

  function onKeyUp(e: React.KeyboardEvent<HTMLDivElement>) {
    states.turnOffConnectingMode();
  }

  return (
    <div
      id={"IDE"}
      tabIndex={0} //This is needed for onKeyDown/Up event to work
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={style}
      ref={myRef}
    >
      <Line key={connectorLine.id} line={connectorLine} />
      {line.getLines().map(addNewLineElement)}
      <Controller commands={commands} />
      <ModalAddNewAccount show={showModal} handleClose={handleClose} />
      {getAccounts().map(addNewAccountElement)}
    </div>
  );
}

function addNewLineElement(line: line.typeLine) {
  return <Line key={line.id} line={line} />;
}

export function addNewAccountElement(account: typeAccount) {
  return (
    <Connectable key={account.id} account={account}>
      <Account key={account.id} account={account} />
    </Connectable>
  );
}
