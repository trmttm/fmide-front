let connectionMode: boolean = false;
let draggingMode: boolean = true;

export function isDraggingMode(): boolean {
  return draggingMode;
}

export function isConnectingMode(): boolean {
  return connectionMode;
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
