import React from "react";

type keyStrValStr = { [key: string]: string };
export const menuItems: keyStrValStr = {
  Home: "/home",
  Blogs: "/blogs",
  IDE: "/ide",
};

export let textFooter: string = "Copyright ©; fmide.com";
export let btnTextAddNewAccount: string = "New Account";
export let btnTextOk: string = "OK";
export let btnTextCancel: string = "Cancel";
export let titleAddNewAccount: string = "Account Name";
export let defaultAccountName: string = "Account Name";
export let connectorLineId: string = "connectorLine";
export const testIdInputAddNewAccount: string = "input addNewAccount";
export type typeDraggableProps = {
  children: React.ReactNode;
  x?: number;
  y?: number;
  setX?: (x: number) => void;
  setY?: (y: number) => void;
};
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
