import { getAccountToConnectedAccounts } from "../entities/connections";
import { updateConnectionLines } from "../entities/line";
import { typeAccount } from "../interfaces/types";
import { getAccountById } from "../entities/accounts";

export function updateConnectorLines(accountFrom: typeAccount) {
  const accountIds = getAccountsConnectedToAccount(accountFrom.id);
  accountIds.forEach((accountToId) => {
    const accountTo = getAccountById(accountToId);
    if (accountTo !== undefined) {
      updateConnectionLines(accountFrom, accountTo);
    }
  });
}

function getAccountsConnectedToAccount(accountId: number): number[] {
  let connectedAccounts: number[] = [];
  const accountToConnectedAccounts = getAccountToConnectedAccounts();
  if (accountId in accountToConnectedAccounts) {
    connectedAccounts = accountToConnectedAccounts[accountId];
  }
  return connectedAccounts;
}
