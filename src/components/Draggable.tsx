import React, { useState } from "react";

type BoxProps = {
  children: React.ReactNode;
};

export function Draggable(props: BoxProps) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xFrom, setXFrom] = useState(0);
  const [yFrom, setYFrom] = useState(0);

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

  return (
    <div
      draggable={true}
      onDragStart={setStartCoordinates}
      onDrag={handleDrag}
      onDragOver={preventSnapBackAnimation}
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
