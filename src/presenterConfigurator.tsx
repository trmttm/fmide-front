import { configureModalAddNewAccount } from "./presenterConfigurator/ModalAddNewAccount";
import { drawLine } from "./presenterConfigurator/DrawLine";
import { configureModalAccountConfiguration } from "./presenterConfigurator/ModalAccountConfiguration";

class PresenterConfigurator {
  configureModalAddNewAccount = configureModalAddNewAccount;
  configureDrawLine = drawLine;
  configureAccountConfiguration = configureModalAccountConfiguration;
}

export const presenterConfigurator = new PresenterConfigurator();
