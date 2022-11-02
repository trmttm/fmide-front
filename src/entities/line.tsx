import { connectorLineId } from "../setting";

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
    setAngle: (angle: number) => setWidthToLine(connectorLineId, angle),
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
