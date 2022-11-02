import { typeAccount } from "./accounts";

let connectionMode: boolean = false;
let draggingMode: boolean = true;
let connectionFromAccount: null | typeAccount = null;
type typeConnections = [number, number][];
let connections: typeConnections = [];

export function isDraggingMode(): boolean {
  return draggingMode;
}

export function isConnectingMode(): boolean {
  return connectionMode;
}

export function turnOnDraggingMode() {
  connectionMode = false;
  draggingMode = true;
  console.log("Turn on Dragging Mode");
}

export function turnOffDraggingMode() {
  connectionMode = true;
  draggingMode = false;
  console.log("Turn off Dragging Mode");
}

export function turnOnConnectingMode() {
  connectionMode = true;
  draggingMode = false;
  console.log("Turn on Connecting Mode");
}

export function turnOffConnectingMode() {
  connectionMode = false;
  draggingMode = true;
  console.log("Turn off Connecting Mode");
}

export function setConnectionFromAccount(account: typeAccount) {
  connectionFromAccount = account;
  console.log("Connecting from " + account.name + "[" + account.id + "]");
}

export function getConnectionFromAccount(): null | typeAccount {
  return connectionFromAccount;
}

export function connectAccounts(
  accountFrom: typeAccount,
  accountTo: typeAccount
) {
  connections.push([accountFrom.id, accountTo.id]);
  console.log(
    "New connections was made: " + accountFrom.name + " => " + accountTo.name
  );
}

export function getConnections(): typeConnections {
  return connections;
}
