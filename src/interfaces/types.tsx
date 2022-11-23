export type typeAccountObservers = {
  setName: (value: string) => void;
  setWidth: (value: number) => void;
  setHeight: (value: number) => void;
  setX: (value: number) => void;
  setY: (value: number) => void;
};

export type typeAccount = {
  name: string;
  id: number;
  x: number;
  y: number;
  width: number;
  defaultWidth: () => number;
  height: number;
  setX: (x: number) => void;
  setY: (y: number) => void;
  setName: (name: string) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  observers: typeAccountObservers[];
  attachObservers: (observer: typeAccountObservers) => void;
};
export type typeLineObservers = {
  setX: (x: number) => void;
  setY: (y: number) => void;
  setWidth: (width: number) => void;
  setAngle: (angle: number) => void;
};
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
