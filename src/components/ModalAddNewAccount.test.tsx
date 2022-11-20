import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import * as setting from "../setting";
import { ModalAddNewAccount } from "./ModalAddNewAccount";
import { entities } from "../entities/entities";

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
  entities.getAccounts().forEach((account, index) => {
    expect(expectation[index]).toBe(account.name);
  });
}
