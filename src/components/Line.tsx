import React from "react";

type LineParams = {
  x?: number;
  y?: number;
  width?: number;
  angle?: number;
  id?: string | number;
};

export function Line(props: { line: LineParams }) {
  const line: LineParams = props.line;
  const css: {} = {
    backgroundColor: "black",
    /* border-bottom: 2px solid black; */
    position: "absolute",
    height: "2px",
    marginLeft: (line.x === undefined ? 0 : line.x) + "px",
    marginTop: (line.y === undefined ? 0 : line.y) + "px",
    width: (line.width === undefined ? 0 : line.width) + "px",
    rotate: (line.angle === undefined ? 0 : line.angle) + "deg",
  };
  return <div data-testid={line.id} style={css}></div>;
}
