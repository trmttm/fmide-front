import { ModalAddNewAccount } from "./presenterConfigurator/ModalAddNewAccount";
import { drawLine } from "./presenterConfigurator/DrawLine";
import { ModalAccountConfiguration } from "./presenterConfigurator/ModalAccountConfiguration";

class PresenterConfigurator {
  configureModalAddNewAccount = ModalAddNewAccount;
  configureDrawLine = drawLine;
  configureAccountConfiguration = ModalAccountConfiguration;
}

export const presenterConfigurator = new PresenterConfigurator();
