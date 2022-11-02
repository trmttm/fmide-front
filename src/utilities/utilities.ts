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
