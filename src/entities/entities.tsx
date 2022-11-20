import * as account from "./accounts";
import * as connections from "./connections";

class Entities {
  getAccounts = account.getAccounts;
  clearStates = clearStates;
  getAccountById = account.getAccountById;
  createAccount = account.createAccount;
  modifyAccountName = account.modifyAccountName;
  getHookShowAccountModification = account.getHookShowAccountModification;
  setHookShowAccountConfiguration = account.setHookShowAccountConfiguration;
  getAccountToConnectedAccounts = connections.getAccountToConnectedAccounts;
  setConnectionFromAccount = connections.setConnectionFromAccount;
  connectAccounts = connections.connectAccounts;
  getConnectionFromAccount = connections.getConnectionFromAccount;
  getConnections = connections.getConnections;
}

export const entities = new Entities();

function clearStates() {
  account.clearStates();
  connections.clearStates();
}
