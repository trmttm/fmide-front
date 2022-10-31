import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IDE } from "./IDE";
import * as setting from "./setting";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { accounts } from "./states";

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

test("Button addNewAccount updates state", () => {
  render(<ModalAddNewAccount />);
  testStateOfAddNewAccount("Account 01", ["Account 01"]);
  testStateOfAddNewAccount("Account 02", ["Account 01", "Account 02"]);
});

function testStateOfAddNewAccount(
  newAccountName: string,
  expectation: string[]
) {
  const buttonOk = screen.getByText(setting.btnTextOk);
  const inputElement = screen.getByTestId(setting.testIdInputAddNewAccount);
  fireEvent.input(inputElement, { target: { value: newAccountName } });
  fireEvent.click(buttonOk);
  accounts.forEach((account, index) => {
    expect(expectation[index]).toBe(account);
  });
}

test("Button addNewAccount adds new account HTML element", () => {});
