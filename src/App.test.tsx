import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

function detectElement(roleName: string) {
  const element = screen.getByRole(roleName);
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
}

test("Menu is shown", () => {
  render(<App />);
  detectElement("Header");
});

test("Footer is shown", () => {
  render(<App />);
  detectElement("contentinfo");
});
