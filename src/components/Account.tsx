import { typeAccount } from "../entities/accounts";
import { Draggable } from "./Draggable";
import Button from "react-bootstrap/Button";
import React from "react";

export function Account(props: { account: typeAccount }) {
  const account: typeAccount = props.account;
  const id = "draggable-account-" + account.id;
  return (
    <Draggable
      key={id}
      id={id}
      x={account.x}
      y={account.y}
      setX={account.setX}
      setY={account.setY}
    >
      <Button variant="secondary" key={account.id}>
        {account.name}
      </Button>
    </Draggable>
  );
}
