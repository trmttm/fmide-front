export type typeAccount = {
  name: string;
  id: number;
  x: number;
  y: number;
  setX: (x: number) => void;
  setY: (y: number) => void;
};
const accounts: typeAccount[] = [];

export function getAccounts(): typeAccount[] {
  return accounts;
}

export function createAccount(
  name: string,
  x?: number,
  y?: number
): typeAccount {
  const nextId: number = accounts.length;
  const newAccount = {
    name: name,
    id: nextId,
    x: x === undefined ? 0 : x,
    y: y === undefined ? 0 : y,
    setX: (x: number) => setXToAccount(nextId, x),
    setY: (y: number) => setYToAccount(nextId, y),
  };
  accounts.push(newAccount);
  return newAccount;
}

function setXToAccount(id: number, x: number) {
  const account = getAccountById(id);
  if (account !== undefined) {
    account.x = x;
    console.log("Account_" + id + "[" + account.name + "] 's x = " + x);
  }
}

function setYToAccount(id: number, y: number) {
  const account = getAccountById(id);
  if (account !== undefined) {
    account.y = y;
    console.log("Account_" + id + "[" + account.name + "] 's y = " + y);
  }
}

function getAccountById(id: number): typeAccount | undefined {
  let accountToReturn = undefined;
  for (const account of accounts) {
    if (account.id === id) {
      accountToReturn = account;
      break;
    }
  }
  return accountToReturn;
}
