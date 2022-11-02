import React, { useState } from "react";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { accounts, typeAccount } from "../entities/accounts";
import { Line } from "./Line";
import { Lines, typeLine } from "../entities/line";
import { Account } from "./Account";
import { Controller } from "./Controller";
import { Connectable } from "./Connectable";

export function IDE() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const commands = { addNewAccount: handleShow };
  return (
    <div id={"IDE"}>
      {Lines.map(addNewLineElement)}
      <Controller commands={commands} />
      <ModalAddNewAccount show={show} handleClose={handleClose} />
      {accounts.map(addNewAccountElement)}
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
