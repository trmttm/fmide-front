import * as presenter from "../presenter/Presenter";

export function drawLine(
  nLines: number,
  setNLines: (value: ((prevState: number) => number) | number) => void
) {
  presenter.attachToDrawConnectorLine(() => setNLines(nLines + 1));
}
