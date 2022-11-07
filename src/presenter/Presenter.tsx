import { interfacePresenter } from "../interfaces/types";

export class Presenter implements interfacePresenter {
  open: (() => void)[];
  close: (() => void)[];

  constructor() {
    this.open = [];
    this.close = [];
  }

  subscribeToCloseInputAccountName(method: () => void): void {
    this.close.push(method);
  }

  subscribeToOpenInputAccountName(method: () => void): void {
    this.open.push(method);
  }

  closeInputAccountName(): void {
    this.close.forEach((method) => method());
  }

  openInputAccountName(): void {
    this.open.forEach((method) => method());
  }
}
