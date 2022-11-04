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

  function setConnectionFrom(_: React.MouseEvent<HTMLDivElement>) {
    state.turnOnConnectingMode();
    state.setConnectionFromAccount(account);
  }

  function setConnectionTo(_: React.MouseEvent<HTMLDivElement>) {
    const connectionFromAccount = state.getConnectionFromAccount();
    if (connectionFromAccount !== null) {
      state.connectAccounts(connectionFromAccount, account);
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
    state.turnOffConnectingMode();
  }
}
