import { connectorLineId } from "../setting";
import * as util from "../utilities/utilities";
import { typeAccount } from "../interfaces/types";

export type typeLine = {
  id: string | number;
  x: number;
  y: number;
  width: number;
  angle: number;
  setX: (x: number) => void;
  setY: (y: number) => void;
  setWidth: (width: number) => void;
  setAngle: (angle: number) => void;
  observers?: null | typeLineObservers;
};

let [connectorX1, connectorY1, isDrawingCline] = [0, 0, false];

export function startDrawingCline(x: number, y: number) {
  setConnectorX1(x);
  setConnectorY1(y);
  isDrawingCline = true;
}

function setConnectorX1(x: number) {
  connectorX1 = x;
}

function setConnectorY1(y: number) {
  connectorY1 = y;
}

const connectorLine: typeLine = {
  id: connectorLineId,
  x: 0,
  y: 0,
  width: 0,
  angle: 0,
  setX: (x: number) => setXToLine(connectorLine, x),
  setY: (y: number) => setYToLine(connectorLine, y),
  setWidth: (width: number) => setWidthToLine(connectorLine, width),
  setAngle: (angle: number) => setAngleToLine(connectorLine, angle),
};
const Lines: typeLine[] = [];
const connectorsDictionary: { [key: string]: typeLine } = {
  connectorLineId: connectorLine,
};

function createLine(
  x?: number,
  y?: number,
  width?: number,
  angle?: number
): typeLine {
  const newLine = {
    id: Lines.length,
    x: x !== undefined ? x : 0,
    y: y !== undefined ? y : 0,
    width: width !== undefined ? width : 0,
    angle: angle !== undefined ? angle : 0,
    setX: (x: number) => setXToLine(newLine, x),
    setY: (y: number) => setYToLine(newLine, y),
    setWidth: (width: number) => setWidthToLine(newLine, width),
    setAngle: (angle: number) => setAngleToLine(newLine, angle),
  };
  Lines.push(newLine);
  return newLine;
}

export function getLines(): typeLine[] {
  return Lines;
}

function setXToLine(line: typeLine, x: number) {
  line.x = x;
  if (line.observers !== null && line.observers !== undefined) {
    line.observers.setX(x);
  }
}

function setYToLine(line: typeLine, y: number) {
  line.y = y;
  if (line.observers !== null && line.observers !== undefined) {
    line.observers.setY(y);
  }
}

function setWidthToLine(line: typeLine, width: number) {
  line.width = width;
  if (line.observers !== null && line.observers !== undefined) {
    line.observers.setWidth(width);
  }
}

function setAngleToLine(line: typeLine, angle: number) {
  line.angle = angle;
  if (line.observers !== null && line.observers !== undefined) {
    line.observers.setAngle(angle);
  }
}

export function getLineById(id: string | number): typeLine | undefined {
  return connectorsDictionary[id];
}

export function getCLine(): typeLine {
  return connectorLine;
}

export function drawCLine(x2: number, y2: number) {
  if (isDrawingCline) {
    const x1: number = connectorX1;
    const y1: number = connectorY1;
    const connectorLine = getCLine();

    drawLine(x1, y1, x2, y2, connectorLine);
  }
}

function drawLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  line: typeLine
) {
  const width = util.getDistanceBetweenPoints(x1, y1, x2, y2);
  const angle = util.getAngleOfTwoPoints(x1, y1, x2, y2);
  const x = Math.round((x2 + x1 - width) / 2);
  const y = Math.round((y2 + y1) / 2);

  line.setX(x);
  line.setY(y);
  line.setWidth(width);
  line.setAngle(angle);
}

export function removeCLine() {
  isDrawingCline = false;
  connectorLine.setX(0);
  connectorLine.setY(0);
  connectorLine.setWidth(0);
  connectorLine.setAngle(0);
}

export type typeLineObservers = {
  setX: (x: number) => void;
  setY: (y: number) => void;
  setWidth: (width: number) => void;
  setAngle: (angle: number) => void;
};

export function attachObservers(line: typeLine, observers: typeLineObservers) {
  line.observers = observers;
}

export function updateConnectionLines(
  accountFrom: typeAccount,
  accountTo: typeAccount
) {
  const line = getOrCreateConnectorLine(accountFrom.id, accountTo.id);
  const [x1, y1, x2, y2] = util.getNearestPointsOfTwoElements(
    accountFrom.x,
    accountFrom.y,
    accountFrom.width,
    accountFrom.height,
    accountTo.x,
    accountTo.y,
    accountTo.width,
    accountTo.height
  );
  drawLine(x1, y1, x2, y2, line);
}

function getOrCreateConnectorLine(
  fromId: number | string,
  toId: number | string
): typeLine {
  const key = getConnectorDictionaryKey(fromId, toId);
  let line: typeLine;
  if (key in connectorsDictionary) {
    line = connectorsDictionary[key];
  } else {
    line = createLine(0, 0, 0, 0);
    connectorsDictionary[getConnectorDictionaryKey(fromId, toId)] = line;
  }
  return line;
}

export function getConnectorDictionaryKey(
  fromId: number | string,
  toId: number | string
): string {
  return "connectorFromAccount[" + fromId + "]ToAccount[" + toId + "]";
}
