import React from "react";
import * as mode from "../entities/mode";
import * as connections from "../entities/connections";
import { connectAccounts } from "../entities/connections";
import { typeAccount } from "../interfaces/types";

export function Connectable(props: {
  children: React.ReactNode;
  account: typeAccount;
}) {
  const account = props.account;
  const style: {} = {
    position: "absolute",
    backgroundColor: "yellow",
  };

  function setConnectionFrom(_: React.MouseEvent<HTMLDivElement>) {
    mode.turnOnConnectingMode();
    connections.setConnectionFromAccount(account);
  }

  function setConnectionTo(_: React.MouseEvent<HTMLDivElement>) {
    const connectionFromAccount = connections.getConnectionFromAccount();
    if (connectionFromAccount !== null) {
      connectAccounts(connectionFromAccount, account);
      // updateConnectionLines(connectionFromAccount, account);
    }
  }

  return (
    <div
      style={style}
      onMouseDown={(event) => wrapperOnlyIfMetaKey(setConnectionFrom, event)}
      onMouseUp={(event) => wrapperOnlyIfMetaKey(setConnectionTo, event)}
      data-testid={"connectable-" + account.id}
    >
      {props.children}
    </div>
  );
}

function wrapperOnlyIfMetaKey(
  f: (event: React.MouseEvent<HTMLDivElement>) => void,
  event: React.MouseEvent<HTMLDivElement>
) {
  if (event.metaKey) {
    f(event);
  } else {
    mode.turnOffConnectingMode();
  }
}
