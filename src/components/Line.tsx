import React, { useState } from "react";

export function Line(props: { testid?: string }) {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [angle, setAngle] = useState(0);
  const css: {} = {
    backgroundColor: "black",
    /* border-bottom: 2px solid black; */
    position: "absolute",
    height: "2px",
    marginLeft: left + "px",
    marginTop: top + "px",
    rotate: angle + "deg",
  };
  if (props.testid !== undefined) {
    return <div data-testid={props.testid} style={css}></div>;
  } else {
    return <div style={css}></div>;
  }
}
