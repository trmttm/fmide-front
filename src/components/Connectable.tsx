import React from "react";
import { typeAccount } from "../entities/accounts";

export function Connectable(props: {
  children: React.ReactNode;
  account: typeAccount;
}) {
  const account = props.account;
  const style: {} = {
    position: "absolute",
    backgroundColor: "yellow",
  };

  function setConnectionFrom(event: React.MouseEvent<HTMLDivElement>) {
    if (event.metaKey) {
      console.log("Turn on Connecting Mode");
      console.log("Connecting from " + account.name + "[" + account.id + "]");
    }
  }

  function setConnectionTo(event: React.MouseEvent<HTMLDivElement>) {
    if (event.metaKey) {
      console.log("Connecting to " + account.name + "[" + account.id + "]");
    }
    console.log("Turn off Connecting Mode");
  }

  return (
    <div
      style={style}
      onMouseDown={setConnectionFrom}
      onMouseUp={setConnectionTo}
    >
      {props.children}
    </div>
  );
}
