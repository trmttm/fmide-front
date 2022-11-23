import * as presenter from "../presenter/Presenter";

export function configureModalAddNewAccount(
  showModal: boolean,
  setShowModal: (value: ((prevState: boolean) => boolean) | boolean) => void
) {
  presenter.setHookShowAddNewAccountInputName(showModal);
  presenter.attachToOpenAddNewAccountInputName(() => setShowModal(true));
  presenter.attachToCloseAddNewAccountInputName(() => setShowModal(false));
}
