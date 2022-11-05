import { typeAccount, typeAccountObservers } from "../interfaces/types";

const accounts: typeAccount[] = [];

export function getAccounts(): typeAccount[] {
  return accounts;
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
    observers: null,
    attachObservers: (observers: typeAccountObservers) =>
      attachObserver(newAccount, observers),
  };
  accounts.push(newAccount);
  return newAccount;
}

function setNameToAccount(account: typeAccount, name: string) {
  account.name = name;
}

function setXToAccount(account: typeAccount, x: number) {
  account.x = x;
}

function setYToAccount(account: typeAccount, y: number) {
  account.y = y;
}

function setWidthToAccount(account: typeAccount, width: number) {
  account.width = width;
  if (account.observers !== null) {
    account.observers.setWidth(width);
  }
}

function setHeightToAccount(account: typeAccount, height: number) {
  account.height = height;
  if (account.observers !== null) {
    account.observers.setHeight(height);
  }
}

function attachObserver(account: typeAccount, observers: typeAccountObservers) {
  account.observers = observers;
}
