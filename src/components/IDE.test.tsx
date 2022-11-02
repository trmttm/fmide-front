import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { IDE } from "./IDE";
import * as setting from "../setting";

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

test("Button addNewAccount can be dragged", () => {
  //  I don't know how to test draggable
});

test("Button addNewAccount adds new account HTML element", () => {
  render(<IDE />);
  testIfNewAccountButtonIsAdded("Account 01");
  testIfNewAccountButtonIsAdded("Account 02");
});

function testIfNewAccountButtonIsAdded(newAccountName: string) {
  clickAddNewButton();
  inputNewAccountNameAndClickOk(newAccountName);
  const newAccountButton = screen.getByText(newAccountName);
  expect(newAccountButton).toBeInTheDocument();
}

function clickAddNewButton() {
  const button = getAddNewButton();
  fireEvent.click(button);
}

function inputNewAccountNameAndClickOk(newAccountName: string) {
  const buttonOk = screen.getByText(setting.btnTextOk);
  const inputElement = screen.getByTestId(setting.testIdInputAddNewAccount);
  fireEvent.input(inputElement, { target: { value: newAccountName } });
  fireEvent.click(buttonOk);
}

test("connectorLine is shown", () => {
  render(<IDE />);
  const connectorLine = screen.getByTestId(setting.connectorLineId);
  expect(connectorLine).toBeInTheDocument();
});
