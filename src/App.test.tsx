import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { IDE } from "./components/IDE";
import * as setting from "./setting";

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

test("connectorLine is shown", () => {
  render(<App />);
  const connectorLine = screen.getByTestId(setting.connectorLineId);
  expect(connectorLine).toBeInTheDocument();
});
