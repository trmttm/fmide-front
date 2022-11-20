import * as presenter from "../presenter/Presenter";
import { setHookShowAccountConfiguration } from "../entities/accounts";

export function ModalAccountConfiguration(
  accountId: number,
  showModal: boolean,
  setShowModal: (value: ((prevState: boolean) => boolean) | boolean) => void
) {
  setHookShowAccountConfiguration(accountId, showModal);
  presenter.attachToOpenAccountConfiguration(accountId, () =>
    setShowModal(true)
  );
  presenter.attachToCloseAccountConfiguration(accountId, () =>
    setShowModal(false)
  );
}
