import * as lines from "./updateConnectorLines";

class Interactor {
  updateConnectorLines = lines.updateConnectorLines;
}

export const interactor = new Interactor();
