import { typeAccount } from "../interfaces/types";

let connectionFromAccount: null | typeAccount = null;
type typeConnections = [number, number][];
let connections: typeConnections = [];
let accountToConnectedAccounts: {
  [key: number | string]: number[];
} = {};

export function getAccountToConnectedAccounts(): {
  [key: number | string]: number[];
} {
  return accountToConnectedAccounts;
}

export function clearStates() {
  connections = [];
  accountToConnectedAccounts = {};
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
  const fromId = accountFrom.id;
  const toId = accountTo.id;
  const d = accountToConnectedAccounts;
  const accountsAreConnected = fromId in d && d[fromId].includes(toId);
  pushOrAddNewArray(fromId, toId, d);
  pushOrAddNewArray(toId, fromId, d);
  if (!accountsAreConnected) {
    connections.push([fromId, toId]);
  }
  const message = "New connection: " + accountFrom.name + "=>" + accountTo.name;
  console.log(message);
}

export function getConnections(): typeConnections {
  return connections;
}

function pushOrAddNewArray(
  key: any,
  element: any,
  object: { [key: string | number]: any[] }
) {
  if (key in object) {
    object[key].push(element);
  } else {
    object[key] = [element];
  }
}
