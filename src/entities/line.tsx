import { connectorLineId } from "../setting";
import * as util from "../utilities/utilities";

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
};

let [connectorX1, connectorY1] = [0, 0];

export function setConnectorX1(x: number) {
  connectorX1 = x;
}

export function setConnectorY1(y: number) {
  connectorY1 = y;
}

export function getConnectorX1(): number {
  return connectorX1;
}

export function getConnectorY1(): number {
  return connectorY1;
}

const Lines: typeLine[] = [
  {
    id: connectorLineId,
    x: 10,
    y: 20,
    width: 30,
    angle: 30,
    setX: (x: number) => setXToLine(connectorLineId, x),
    setY: (y: number) => setYToLine(connectorLineId, y),
    setWidth: (width: number) => setWidthToLine(connectorLineId, width),
    setAngle: (angle: number) => setAngleToLine(connectorLineId, angle),
  },
];

export function createLine(
  x?: number,
  y?: number,
  width?: number,
  angle?: number
) {
  const newLine = {
    id: Lines.length,
    x: x !== undefined ? x : 0,
    y: y !== undefined ? y : 0,
    width: width !== undefined ? width : 0,
    angle: angle !== undefined ? angle : 0,
    setX: (x: number) => setXToLine(Lines.length, x),
    setY: (y: number) => setYToLine(Lines.length, y),
    setWidth: (width: number) => setWidthToLine(Lines.length, width),
    setAngle: (angle: number) => setAngleToLine(Lines.length, angle),
  };
  Lines.push(newLine);
}

export function getLines(): typeLine[] {
  return Lines;
}

function setXToLine(id: number | string, x: number) {
  const line = getLineById(id);
  if (line !== undefined) {
    line.x = x;
  }
}

function setYToLine(id: number | string, y: number) {
  const line = getLineById(id);
  if (line !== undefined) {
    line.y = y;
  }
}

function setWidthToLine(id: number | string, width: number) {
  const line = getLineById(id);
  if (line !== undefined) {
    line.width = width;
  }
}

function setAngleToLine(id: number | string, angle: number) {
  const line = getLineById(id);
  if (line !== undefined) {
    line.angle = angle;
  }
}

export function getLineById(id: string | number): typeLine | undefined {
  let lineToReturn = undefined;
  for (const line of Lines) {
    if (line.id === id) {
      lineToReturn = line;
      break;
    }
  }
  return lineToReturn;
}

function getConnectorLine(): typeLine {
  return Lines[0]; //Don't want to use getLineById. Avoid unnecessary loop.
}

export function drawConnectorLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const connectorLine = getConnectorLine();

  const width = util.getDistanceBetweenPoints(x1, y1, x2, y2);
  const angle = util.getAngleOfTwoPoints(x1, y1, x2, y2);
  const x = Math.round((x2 + x1 - width) / 2);
  const y = Math.round((y2 + y1) / 2);

  connectorLine.setX(x);
  connectorLine.setY(y);
  connectorLine.setWidth(width);
  connectorLine.setAngle(angle);
  console.log(JSON.stringify(connectorLine));
}
