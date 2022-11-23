import { typeAccount, typeAccountObservers } from "../interfaces/types";

let accounts: typeAccount[] = [];
let accountIdToAccount: { [key: number]: typeAccount } = {};
export let hooksShowAccountModification: { [key: number]: boolean } = {};
type CommandsAccountConfiguration = {
  [key: number]: (() => void)[];
};
export let commandsOpenAccountConfiguration: CommandsAccountConfiguration = {};
export let commandsCloseAccountConfiguration: CommandsAccountConfiguration = {};

export function getAccounts(): typeAccount[] {
  return accounts;
}

export function clearStates() {
  accounts = [];
  accountIdToAccount = {};
}

export function getAccountById(id: number): typeAccount | undefined {
  return accountIdToAccount[id];
}

export function createAccount(
  name: string,
  x?: number,
  y?: number,
  width?: number,
  height?: number
): typeAccount {
  const nextId: number = accounts.length;
  const newAccount = {
    name: name,
    id: nextId,
    x: x === undefined ? 0 : x,
    y: y === undefined ? 0 : y,
    width: width === undefined ? name.length * 15 : width,
    height: height === undefined ? 38 : height,
    setName: (name: string) => setNameToAccount(newAccount, name),
    setX: (x: number) => setXToAccount(newAccount, x),
    setY: (y: number) => setYToAccount(newAccount, y),
    setWidth: (width: number) => setWidthToAccount(newAccount, width),
    setHeight: (height: number) => setHeightToAccount(newAccount, height),
    observers: [],
    attachObservers: (observers: typeAccountObservers) =>
      attachObserver(newAccount, observers),
  };
  accounts.push(newAccount);
  accountIdToAccount[nextId] = newAccount;
  hooksShowAccountModification[nextId] = false;
  commandsOpenAccountConfiguration[nextId] = [];
  commandsCloseAccountConfiguration[nextId] = [];
  return newAccount;
}

export function modifyAccountName(id: number, name: string) {
  const account = getAccountById(id);
  if (account !== undefined) {
    setNameToAccount(account, name);
  }
}

function setNameToAccount(account: typeAccount, name: string) {
  account.name = name;
  account.observers.forEach((observer) => {
    observer.setName(name);
    setWidthToAccount(account, name.length * 15);
  });
}

function setXToAccount(account: typeAccount, x: number) {
  account.x = x;
  account.observers.forEach((observer) => observer.setX(x));
}

function setYToAccount(account: typeAccount, y: number) {
  account.y = y;
  account.observers.forEach((observer) => observer.setY(y));
}

function setWidthToAccount(account: typeAccount, width: number) {
  account.width = width;
  account.observers.forEach((observer) => observer.setWidth(width));
}

function setHeightToAccount(account: typeAccount, height: number) {
  account.height = height;
  account.observers.forEach((observer) => observer.setHeight(height));
}

function attachObserver(account: typeAccount, observers: typeAccountObservers) {
  account.observers.push(observers);
}

export function getHookShowAccountModification(accountId: number): boolean {
  return hooksShowAccountModification[accountId];
}

export function setHookShowAccountConfiguration(
  accountId: number,
  hook: boolean
) {
  hooksShowAccountModification[accountId] = hook;
}
