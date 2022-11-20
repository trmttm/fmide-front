import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Connectable } from "./Connectable";
import * as mode from "../entities/mode";
import * as connections from "../entities/connections";
import { typeAccount } from "../interfaces/types";
import { entities } from "../entities/entities";

function renderConnectable(account: typeAccount) {
  render(<Connectable account={account}>Connectable</Connectable>);
  const connectable = screen.getByTestId("connectable-" + account.id);
  expect(connectable).toBeInTheDocument();
  return connectable;
}

test("Connectable connects accounts", () => {
  const accountFrom = entities.createAccount("Account From", 10, 20);
  const accountTo = entities.createAccount("Account To", 50, 80);

  let view = renderConnectable(accountFrom);
  fireEvent.mouseDown(view, { metaKey: true });
  expect(mode.isConnectingMode()).toBe(true);
  expect(connections.getConnectionFromAccount()).toBe(accountFrom);

  view = renderConnectable(accountTo);
  fireEvent.mouseUp(view, { metaKey: true });
  expect(JSON.stringify(connections.getConnections())).toBe(
    JSON.stringify([[accountFrom.id, accountTo.id]])
  );
});
