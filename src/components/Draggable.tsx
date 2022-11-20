import React, { useState } from "react";
import { entities } from "../entities/entities";

export type typeDraggableProps = {
  children: React.ReactNode;
  x?: number;
  y?: number;
  setX?: (x: number) => void;
  setY?: (y: number) => void;
  id: string;
};

export function Draggable(props: typeDraggableProps) {
  const [x, setX] = useState(props.x !== undefined ? props.x : 0);
  const [y, setY] = useState(props.y !== undefined ? props.y : 0);
  const [xFrom, setXFrom] = useState(x);
  const [yFrom, setYFrom] = useState(y);

  function setStartCoordinates(event: React.DragEvent<HTMLDivElement>) {
    setXFrom(event.clientX);
    setYFrom(event.clientY);
  }

  function handleDrag(event: React.DragEvent<HTMLDivElement>) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const deltaX = mouseX - xFrom;
    const deltaY = mouseY - yFrom;
    if (deltaX !== 0 && mouseX !== 0) {
      const newX = x + deltaX;
      setXFrom(mouseX);
      setX(newX);
      if (props.setX !== undefined) {
        props.setX(x);
      }
    }
    if (deltaY !== 0 && mouseY !== 0) {
      const newY = y + deltaY;
      setYFrom(mouseY);
      setY(newY);
      if (props.setY !== undefined) {
        props.setY(y);
      }
    }
  }

  function preventSnapBackAnimation(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  return (
    <div
      draggable={true}
      onDragStart={(event) => wrapperDraggingMode(setStartCoordinates, event)}
      onDrag={(event) => wrapperDraggingMode(handleDrag, event)}
      onDragOver={(event) =>
        wrapperDraggingMode(preventSnapBackAnimation, event)
      }
      style={{
        marginTop: Math.floor(y) + "px",
        marginLeft: Math.floor(x) + "px",
        position: "absolute",
      }}
      data-testid={props.id}
    >
      {props.children}
    </div>
  );
}

function wrapperDraggingMode(
  f: (args: any) => void,
  event: React.DragEvent<HTMLDivElement>
) {
  if (entities.isDraggingMode()) {
    f(event);
  } else {
    event.preventDefault();
  }
}
