import React, { useState } from "react";
import { attachObservers, typeLineObservers } from "../entities/line";
import { typeLine } from "../interfaces/types";

export function Line(props: { line: typeLine }) {
  const line: typeLine = props.line;
  const [x, setX] = useState(line.x);
  const [y, setY] = useState(line.y);
  const [width, setWidth] = useState(line.width);
  const [angle, setAngle] = useState(line.angle);
  const observers: typeLineObservers = {
    setX: setX,
    setY: setY,
    setWidth: setWidth,
    setAngle: setAngle,
  };
  attachObservers(line, observers);

  const css: {} = {
    backgroundColor: "black",
    /* border-bottom: 2px solid black; */
    position: "absolute",
    height: "2px",
    marginLeft: x + "px",
    marginTop: y + "px",
    width: width + "px",
    rotate: angle + "deg",
  };
  return <div data-testid={line.id} style={css}></div>;
}
