import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Draggable } from "./Draggable";

test("Draggable can be dragged", () => {
  // This test does not work
  const id = "test-draggable";
  render(<Draggable id={id}>TestText</Draggable>);
  const draggable = screen.getByTestId(id);
  fireEvent.dragStart(draggable, { clientX: 10, clientY: 10 });
  fireEvent.drag(draggable, { clientX: 50, clientY: 50 });
  expect(draggable.style.marginLeft).toBe("0px"); //This should be "50px"
});
