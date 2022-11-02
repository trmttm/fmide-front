import React from "react";
import { typeAccount } from "../entities/accounts";
import * as state from "../entities/states";

export function Connectable(props: {
  children: React.ReactNode;
  account: typeAccount;
  drawConnectorLineElement?: (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => void;
}) {
  const account = props.account;
  const drawLineMethod = props.drawConnectorLineElement;
  const style: {} = {
    position: "absolute",
    backgroundColor: "yellow",
  };

  let [x1, y1, x2, y2] = [0, 0, 0, 0];

  function setConnectionFrom(event: React.MouseEvent<HTMLDivElement>) {
    state.turnOnConnectingMode();
    state.setConnectionFromAccount(account);
    x1 = event.clientX;
    y1 = event.clientY;
  }

  function drawConnectorLine(event: React.MouseEvent<HTMLDivElement>) {
    x2 = event.clientX;
    y2 = event.clientY;
    if (drawLineMethod !== undefined) {
      drawLineMethod(x1, y1, x2, y2);
    }
  }

  function setConnectionTo(event: React.MouseEvent<HTMLDivElement>) {
    const connectionFromAccount = state.getConnectionFromAccount();
    if (connectionFromAccount !== null) {
      state.connectAccounts(connectionFromAccount, account);
    }
  }

  return (
    <div
      style={style}
      onMouseDown={(event) => wrapperOnlyIfMetaKey(setConnectionFrom, event)}
      onMouseMove={drawConnectorLine}
      onMouseUp={setConnectionTo}
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
