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
  setX: (x: number) => setXToLine(connectorLineId, x),
  setY: (y: number) => setYToLine(connectorLineId, y),
  setWidth: (width: number) => setWidthToLine(connectorLineId, width),
  setAngle: (angle: number) => setAngleToLine(connectorLineId, angle),
};
const Lines: typeLine[] = [];

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
    if (line.observers !== null && line.observers !== undefined) {
      line.observers.setX(x);
    }
  }
}

function setYToLine(id: number | string, y: number) {
  const line = getLineById(id);
  if (line !== undefined) {
    line.y = y;
    if (line.observers !== null && line.observers !== undefined) {
      line.observers.setY(y);
    }
  }
}

function setWidthToLine(id: number | string, width: number) {
  const line = getLineById(id);
  if (line !== undefined) {
    line.width = width;
    if (line.observers !== null && line.observers !== undefined) {
      line.observers.setWidth(width);
    }
  }
}

function setAngleToLine(id: number | string, angle: number) {
  const line = getLineById(id);
  if (line !== undefined) {
    line.angle = angle;
    if (line.observers !== null && line.observers !== undefined) {
      line.observers.setAngle(angle);
    }
  }
}

export function getLineById(id: string | number): typeLine | undefined {
  let lineToReturn = undefined;
  if (id === connectorLineId) {
    lineToReturn = getCLine();
  } else {
    for (const line of Lines) {
      if (line.id === id) {
        lineToReturn = line;
        break;
      }
    }
  }
  return lineToReturn;
}

export function getCLine(): typeLine {
  return connectorLine;
}

export function drawCLine(x2: number, y2: number) {
  const x1: number = connectorX1;
  const y1: number = connectorY1;
  const connectorLine = getCLine();

  const width = util.getDistanceBetweenPoints(x1, y1, x2, y2);
  const angle = util.getAngleOfTwoPoints(x1, y1, x2, y2);
  const x = Math.round((x2 + x1 - width) / 2);
  const y = Math.round((y2 + y1) / 2);

  connectorLine.setX(x);
  connectorLine.setY(y);
  connectorLine.setWidth(width);
  connectorLine.setAngle(angle);
}

export function removeCLine() {
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
