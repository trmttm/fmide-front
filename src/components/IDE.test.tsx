import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IDE } from "./IDE";
import * as setting from "../setting";
import { getLineById } from "../entities/line";

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

test("lines are drawn per Lines model", () => {
  render(<IDE />);
  testIfSpecifiedLineExists(setting.connectorLineId);
  testIfSpecifiedLineExists(0);

  testLinePropertiesMatch(setting.connectorLineId);
  testLinePropertiesMatch(0);
});

function testIfSpecifiedLineExists(lineId: string | number) {
  const connectorLine = screen.getByTestId(lineId);
  expect(connectorLine).toBeInTheDocument();
}

function testLinePropertiesMatch(lineId: number | string) {
  const lineState = getLineById(lineId);
  const lineElement = screen.getByTestId(lineId);
  const expectedX = lineState !== undefined ? lineState.x + "px" : "0px";
  const expectedY = lineState !== undefined ? lineState.y + "px" : "0px";
  const expectedAngle =
    lineState !== undefined ? lineState.angle + "deg" : "0deg";
  const expectedLength =
    lineState !== undefined ? lineState.width + "px" : "0px";
  expect(lineElement.style.marginLeft).toBe(expectedX);
  expect(lineElement.style.marginTop).toBe(expectedY);
  expect(lineElement.style.rotate).toBe(expectedAngle);
  expect(lineElement.style.width).toBe(expectedLength);
}
