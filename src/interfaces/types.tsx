export type typeAccountObservers = {
  setName: (value: string) => void;
  setWidth: (value: number) => void;
  setHeight: (value: number) => void;
};

export type typeAccount = {
  name: string;
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  setX: (x: number) => void;
  setY: (y: number) => void;
  setName: (name: string) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  observers: typeAccountObservers | null;
  attachObservers: (observer: typeAccountObservers) => void;
};
