import { connectorLineId } from "../setting";

export type typeLine = {
  id: string | number;
  x: number;
  y: number;
  width: number;
  angle: number;
};
export const Lines: typeLine[] = [
  { id: connectorLineId, x: 10, y: 20, width: 30, angle: 30 },
  { id: 0, x: 10, y: 20, width: 30, angle: 30 },
];

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
