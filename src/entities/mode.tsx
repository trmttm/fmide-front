let connectionMode: boolean = false;
let draggingMode: boolean = true;

export function isDraggingMode(): boolean {
  return draggingMode;
}

export function isConnectingMode(): boolean {
  return connectionMode;
}

export function turnOnDraggingMode() {
  connectionMode = false;
  draggingMode = true;
  console.log("Turn on Dragging Mode");
}

export function turnOffDraggingMode() {
  connectionMode = true;
  draggingMode = false;
  console.log("Turn off Dragging Mode");
}

export function turnOnConnectingMode() {
  connectionMode = true;
  draggingMode = false;
  console.log("Turn on Connecting Mode");
}

export function turnOffConnectingMode() {
  connectionMode = false;
  draggingMode = true;
  console.log("Turn off Connecting Mode");
}
