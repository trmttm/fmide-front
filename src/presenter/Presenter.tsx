let commandsOpenAddNewAccountInputName: (() => void)[] = [];
let commandsCloseAddNewAccountInputName: (() => void)[] = [];
let hookShowAddNewAccountInputName: boolean = true;

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
