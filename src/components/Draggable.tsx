import React, { useState } from "react";

export type typeDraggableProps = {
  children: React.ReactNode;
  x?: number;
  y?: number;
  setX?: (x: number) => void;
  setY?: (y: number) => void;
};

export function Draggable(props: typeDraggableProps) {
  const [x, setX] = useState(props.x !== undefined ? props.x : 0);
  const [y, setY] = useState(props.y !== undefined ? props.y : 0);
  const [xFrom, setXFrom] = useState(x);
  const [yFrom, setYFrom] = useState(y);

  function setStartCoordinates(event: React.MouseEvent) {
    setXFrom(event.clientX);
    setYFrom(event.clientY);
  }

  function handleDrag(event: React.MouseEvent) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const deltaX = mouseX - xFrom;
    const deltaY = mouseY - yFrom;
    if (deltaX !== 0 && mouseX !== 0) {
      const newX = x + deltaX;
      setXFrom(mouseX);
      setX(newX);
    }
    if (deltaY !== 0 && mouseY !== 0) {
      const newY = y + deltaY;
      setYFrom(mouseY);
      setY(newY);
    }
  }

  function preventSnapBackAnimation(event: React.MouseEvent) {
    event.preventDefault();
  }

  function setXY() {
    if (props.setX !== undefined) {
      props.setX(x);
    }
    if (props.setY !== undefined) {
      props.setY(y);
    }
  }

  return (
    <div
      draggable={true}
      onDragStart={setStartCoordinates}
      onDrag={handleDrag}
      onDragOver={preventSnapBackAnimation}
      onDragEnd={setXY}
      style={{
        marginTop: Math.floor(y) + "px",
        marginLeft: Math.floor(x) + "px",
        position: "absolute",
      }}
    >
      {props.children}
    </div>
  );
}
