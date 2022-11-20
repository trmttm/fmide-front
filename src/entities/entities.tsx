import * as account from "./accounts";

class Entities {
  getAccounts = account.getAccounts;
  clearStates = account.clearStates;
  getAccountById = account.getAccountById;
  createAccount = account.createAccount;
  modifyAccountName = account.modifyAccountName;
  getHookShowAccountModification = account.getHookShowAccountModification;
  setHookShowAccountConfiguration = account.setHookShowAccountConfiguration;
}

export const entities = new Entities();
