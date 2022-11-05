export function getDistanceBetweenPoints(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
}

export function getAngleOfTwoPoints(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.round((Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI);
}

export function getNearestPointsOfTwoElements(
  x11: number,
  y11: number,
  width1: number,
  height1: number,
  x21: number,
  y21: number,
  width2: number,
  height2: number
): [number, number, number, number] {
  const x12 = x11 + width1;
  const y12 = y11 + height1;
  const x22 = x21 + width2;
  const y22 = y21 + height2;

  return getNearestPointsOfCoordinates(x11, y11, x12, y12, x21, y21, x22, y22);
}

function getNearestPointsOfCoordinates(
  x11: number,
  y11: number,
  x12: number,
  y12: number,
  x21: number,
  y21: number,
  x22: number,
  y22: number
): [number, number, number, number] {
  const midpointX1 = (x11 + x12) / 2;
  const midpointY1 = (y11 + y12) / 2;
  const midpointX2 = (x21 + x22) / 2;
  const midpointY2 = (y21 + y22) / 2;
  const n1 = [midpointX1, y11];
  const s1 = [midpointX1, y12];
  const w1 = [x11, midpointY1];
  const e1 = [x12, midpointY1];
  const n2 = [midpointX2, y21];
  const s2 = [midpointX2, y22];
  const w2 = [x21, midpointY2];
  const e2 = [x22, midpointY2];

  let minimumDistance: null | number = null;
  let minDistanceCoordinates: [number, number, number, number] = [0, 0, 0, 0];
  [n1, s1, w1, e1].forEach((point1) => {
    [n2, s2, w2, e2].forEach((point2) => {
      const x1 = point1[0];
      const y1 = point1[1];
      const x2 = point2[0];
      const y2 = point2[1];

      const distanceSquared = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
      if (minimumDistance == null) {
        minimumDistance = distanceSquared;
      } else {
        minimumDistance = Math.min(minimumDistance, distanceSquared);
      }

      if (minimumDistance === distanceSquared) {
        minDistanceCoordinates = [x1, y1, x2, y2];
      }
    });
  });

  return minDistanceCoordinates;
}
