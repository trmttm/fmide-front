export let commandsOpenAddNewAccountInputName: (() => void)[] = [];
export let commandsCloseAddNewAccountInputName: (() => void)[] = [];
export let hookShowAddNewAccountInputName: boolean = true;

function setHookShowAddNewAccountInputName(hook: boolean) {
  hookShowAddNewAccountInputName = hook;
}

export function getHookShowAddNewAccountInputName(): boolean {
  return hookShowAddNewAccountInputName;
}

function attachToOpenAddNewAccountInputName(command: () => void) {
  commandsOpenAddNewAccountInputName.push(command);
}

function attachToCloseAddNewAccountInputName(command: () => void) {
  commandsCloseAddNewAccountInputName.push(command);
}

export function openAddNewAccountInputName(): void {
  commandsOpenAddNewAccountInputName.forEach((command) => command());
}

export function closeAddNewAccountInputName(): void {
  commandsCloseAddNewAccountInputName.forEach((command) => command());
}

export function configurePresenterAttachModalShowHide(
  showModal: boolean,
  setShowModal: (value: ((prevState: boolean) => boolean) | boolean) => void
) {
  setHookShowAddNewAccountInputName(showModal);
  attachToOpenAddNewAccountInputName(() => setShowModal(true));
  attachToCloseAddNewAccountInputName(() => setShowModal(false));
}
