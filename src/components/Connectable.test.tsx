import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Connectable } from "./Connectable";
import { createAccount, typeAccount } from "../entities/accounts";
import * as state from "../entities/states";

function renderConnectable(account: typeAccount) {
  render(<Connectable account={account}>Connectable</Connectable>);
  const connectable = screen.getByTestId("connectable-" + account.id);
  expect(connectable).toBeInTheDocument();
  return connectable;
}

test("Connectable metaClick turns on Connecting Mode", () => {
  const accountFrom = createAccount("Account From", 10, 20);
  const accountTo = createAccount("Account To", 50, 80);

  let view = renderConnectable(accountFrom);
  fireEvent.mouseDown(view, { metaKey: true });
  expect(state.isConnectingMode()).toBe(true);
  expect(state.getConnectionFromAccount()).toBe(accountFrom);

  view = renderConnectable(accountTo);
  fireEvent.mouseUp(view, { metaKey: true });
  expect(JSON.stringify(state.getConnections())).toBe(
    JSON.stringify([[accountFrom.id, accountTo.id]])
  );
});
