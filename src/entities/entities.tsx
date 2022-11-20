import * as account from "./accounts";
import * as connections from "./connections";
import * as line from "./line";

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

  attachObserversToNotification = line.attachObserversToNotification;
  getCLine = line.getCLine;
  startDrawingCline = line.startDrawingCline;
  drawCLine = line.drawCLine;
  removeCLine = line.removeCLine;
  getLines = line.getLines;
  attachObservers = line.attachObservers;
  updateConnectionLines = line.updateConnectionLines;
  getConnectorDictionaryKey = line.getConnectorDictionaryKey;
  getLineById = line.getLineById;
}

export const entities = new Entities();

function clearStates() {
  account.clearStates();
  connections.clearStates();
  line.clearStates();
}
