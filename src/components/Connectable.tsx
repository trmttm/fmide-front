import React from "react";
import * as mode from "../entities/mode";
import { typeAccount } from "../interfaces/types";
import { entities } from "../entities/entities";

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
    entities.setConnectionFromAccount(account);
  }

  function setConnectionTo(_: React.MouseEvent<HTMLDivElement>) {
    const connectionFromAccount = entities.getConnectionFromAccount();
    if (connectionFromAccount !== null) {
      entities.connectAccounts(connectionFromAccount, account);
      entities.updateConnectionLines(connectionFromAccount, account);
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
