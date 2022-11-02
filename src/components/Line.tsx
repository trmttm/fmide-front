import React from "react";

type LineParams = {
  x?: number;
  y?: number;
  width?: number;
  angle?: number;
  id?: string | number;
};

export function Line(props: LineParams) {
  const css: {} = {
    backgroundColor: "black",
    /* border-bottom: 2px solid black; */
    position: "absolute",
    height: "2px",
    marginLeft: (props.x === undefined ? 0 : props.x) + "px",
    marginTop: (props.y === undefined ? 0 : props.y) + "px",
    width: (props.width === undefined ? 0 : props.width) + "px",
    rotate: (props.angle === undefined ? 0 : props.angle) + "deg",
  };
  return <div data-testid={props.id} style={css}></div>;
}
