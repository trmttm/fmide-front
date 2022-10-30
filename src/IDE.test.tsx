import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IDE } from "./IDE";
import * as setting from "./setting";

function getAddNewButton() {
  return screen.getByRole("button", { name: setting.btnTextAddNewAccount });
}

test("Button addNewAccount is shown", () => {
  render(<IDE />);
  const button = getAddNewButton();
  expect(button).toHaveTextContent(setting.btnTextAddNewAccount);
});

test("Button addNewAccount ask user for account name", () => {
  render(<IDE />);
  const button = getAddNewButton();
  fireEvent.click(button);
  const inputElement = screen.getByText(setting.titleAddNewAccount);
  expect(inputElement).toBeInTheDocument();
});

test("Button addNewAccount updates state", () => {});

test("Button addNewAccount adds new account HTML element", () => {});
