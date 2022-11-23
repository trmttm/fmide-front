import React, { useState } from "react";
import * as types from "../interfaces/types";
import { entities } from "../entities/entities";

export function Line(props: { line: types.typeLine }) {
  const line: types.typeLine = props.line;
  const [x, setX] = useState(line.x);
  const [y, setY] = useState(line.y);
  const [width, setWidth] = useState(line.width);
  const [angle, setAngle] = useState(line.angle);
  const observers: types.typeLineObservers = {
    setX: setX,
    setY: setY,
    setWidth: setWidth,
    setAngle: setAngle,
  };
  entities.attachObservers(line, observers);

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
