import * as account from "./accounts";
import * as connections from "./connections";
import * as line from "./line";
import * as mode from "./mode";

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

  isDraggingMode = mode.isDraggingMode;
  isConnectingMode = mode.isConnectingMode;
  turnOffConnectingMode = mode.turnOffConnectingMode;
  turnOnConnectingMode = mode.turnOnConnectingMode;
}

export const entities = new Entities();

function clearStates() {
  account.clearStates();
  connections.clearStates();
  line.clearStates();
}
