import * as presenter from "../presenter/Presenter";
import { entities } from "../entities/entities";

export function configureModalAccountConfiguration(
  accountId: number,
  showModal: boolean,
  setShowModal: (value: ((prevState: boolean) => boolean) | boolean) => void
) {
  entities.setHookShowAccountConfiguration(accountId, showModal);
  presenter.attachToOpenAccountConfiguration(accountId, () =>
    setShowModal(true)
  );
  presenter.attachToCloseAccountConfiguration(accountId, () =>
    setShowModal(false)
  );
}
