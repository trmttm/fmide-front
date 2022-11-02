import React from "react";
import { typeAccount } from "../entities/accounts";
import * as state from "../entities/states";

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
      state.turnOnConnectingMode();
      state.setConnectionFromAccount(account);
    } else {
      state.turnOffConnectingMode();
    }
  }

  function setConnectionTo(event: React.MouseEvent<HTMLDivElement>) {
    if (event.metaKey) {
      const connectionFromAccount = state.getConnectionFromAccount();
      if (connectionFromAccount !== null) {
        state.connectAccounts(connectionFromAccount, account);
      } else {
        state.turnOffConnectingMode();
      }
    }
    state.turnOffConnectingMode();
  }

  return (
    <div
      style={style}
      onMouseDown={setConnectionFrom}
      onMouseUp={setConnectionTo}
      data-testid={"connectable-" + account.id}
    >
      {props.children}
    </div>
  );
}
