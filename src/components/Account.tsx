import { Draggable } from "./Draggable";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { typeAccount } from "../interfaces/types";

export function Account(props: { account: typeAccount }) {
  const account: typeAccount = props.account;
  const id = "draggable-account-" + account.id;

  const [width, setWidth] = useState(account.width);
  const [height, setHeight] = useState(account.height);
  const [displayName, setDisplayName] = useState(account.name);

  account.attachObservers({
    setName: setDisplayName,
    setWidth: setWidth,
    setHeight: setHeight,
  });

  return (
    <Draggable
      key={id}
      id={id}
      x={account.x}
      y={account.y}
      setX={account.setX}
      setY={account.setY}
    >
      <Button
        variant="secondary"
        key={account.id}
        style={{ width: width + "px", height: height + "px" }}
      >
        {displayName}
      </Button>
    </Draggable>
  );
}
