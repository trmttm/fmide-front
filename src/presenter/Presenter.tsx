import {
  commandsCloseAccountConfiguration,
  commandsOpenAccountConfiguration,
} from "../entities/accounts";

export let commandsOpenAddNewAccountInputName: (() => void)[] = [];
export let commandsCloseAddNewAccountInputName: (() => void)[] = [];
export let hookShowAddNewAccountInputName: boolean = true;

let commandsDrawLine: (() => void)[] = [];

export function setHookShowAddNewAccountInputName(hook: boolean) {
  hookShowAddNewAccountInputName = hook;
}

export function getHookShowAddNewAccountInputName(): boolean {
  return hookShowAddNewAccountInputName;
}

export function attachToOpenAddNewAccountInputName(command: () => void) {
  commandsOpenAddNewAccountInputName.push(command);
}

export function attachToCloseAddNewAccountInputName(command: () => void) {
  commandsCloseAddNewAccountInputName.push(command);
}

export function openAddNewAccountInputName(): void {
  commandsOpenAddNewAccountInputName.forEach((command) => command());
}

export function closeAddNewAccountInputName(): void {
  commandsCloseAddNewAccountInputName.forEach((command) => command());
}

export function attachToOpenAccountConfiguration(
  accountId: number,
  command: () => void
) {
  commandsOpenAccountConfiguration[accountId].push(command);
}

export function attachToCloseAccountConfiguration(
  accountId: number,
  command: () => void
) {
  commandsCloseAccountConfiguration[accountId].push(command);
}

export function openAccountConfiguration(accountId: number): void {
  commandsOpenAccountConfiguration[accountId].forEach((command) => command());
}

export function closeAccountConfiguration(accountId: number): void {
  commandsCloseAccountConfiguration[accountId].forEach((command) => command());
}

export function attachToDrawConnectorLine(command: () => void) {
  commandsDrawLine.push(command);
}

export function drawLine() {
  commandsDrawLine.forEach((command) => command());
}
