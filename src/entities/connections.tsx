import { typeAccount } from "../interfaces/types";

let connectionFromAccount: null | typeAccount = null;
type typeConnections = [number, number][];
let connections: typeConnections = [];

export function clearStates() {
  connections = [];
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
