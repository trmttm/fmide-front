import { typeAccount } from "./accounts";

let connectionMode: boolean = false;
let connectionFromAccount: null | typeAccount = null;
type typeConnections = [number, number][];
let connections: typeConnections = [];

export function getConnectionMode(): boolean {
  return connectionMode;
}

export function turnOnConnectingMode() {
  connectionMode = true;
  console.log("Turn on Connecting Mode");
}

export function turnOffConnectingMode() {
  connectionMode = false;
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
}

export function getConnections(): typeConnections {
  return connections;
}
