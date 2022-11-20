import { updateConnectionLines } from "../entities/line";
import { typeAccount } from "../interfaces/types";
import { entities } from "../entities/entities";

export function updateConnectorLines(accountFrom: typeAccount) {
  const accountIds = getAccountsConnectedToAccount(accountFrom.id);
  accountIds.forEach((accountToId) => {
    const accountTo = entities.getAccountById(accountToId);
    if (accountTo !== undefined) {
      updateConnectionLines(accountFrom, accountTo);
    }
  });
}

function getAccountsConnectedToAccount(accountId: number): number[] {
  let connectedAccounts: number[] = [];
  const accountToConnectedAccounts = entities.getAccountToConnectedAccounts();
  if (accountId in accountToConnectedAccounts) {
    connectedAccounts = accountToConnectedAccounts[accountId];
  }
  return connectedAccounts;
}
