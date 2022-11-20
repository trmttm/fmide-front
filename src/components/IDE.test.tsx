import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IDE } from "./IDE";
import * as setting from "../setting";
import * as entityConnections from "../entities/connections";
import * as entityLines from "../entities/line";
import { entities } from "../entities/entities";

function getAddNewAccountButton() {
  return screen.getByRole("button", { name: setting.btnTextAddNewAccount });
}

test("Button addNewAccount is shown", () => {
  render(<IDE />);
  const button = getAddNewAccountButton();
  expect(button).toHaveTextContent(setting.btnTextAddNewAccount);
});

test("Button addNewAccount ask user for account name", () => {
  render(<IDE />);
  const button = getAddNewAccountButton();
  fireEvent.click(button);
  const inputElement = screen.getByText(setting.titleAddNewAccount);
  expect(inputElement).toBeInTheDocument();
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
  const button = getAddNewAccountButton();
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
  testLinePropertiesMatch(setting.connectorLineId);
});

test("Connect two accounts draws a line", () => {
  entities.clearStates();
  entityConnections.clearStates();

  render(<IDE />);
  const button = getAddNewAccountButton();
  fireEvent.click(button);
  inputNewAccountNameAndClickOk("Account From");
  fireEvent.click(button);
  inputNewAccountNameAndClickOk("Account To");
  const accounts = entities.getAccounts();
  const [accountFrom, accountTo] = accounts;

  expect(accountFrom.name).toBe("Account From");
  expect(accountTo.name).toBe("Account To");
  const connectableFrom = screen.getByTestId("connectable-" + accountFrom.id);
  const connectableTo = screen.getByTestId("connectable-" + accountTo.id);
  fireEvent.mouseDown(connectableFrom, { metaKey: true });
  fireEvent.mouseUp(connectableTo, { metaKey: true });
  const lineKey = entityLines.getConnectorDictionaryKey(
    accountFrom.id,
    accountTo.id
  );
  const line = entityLines.getLineById(lineKey);
  expect(line === undefined).toBe(false);
  let [testX, testY, testWidth, testAngle] = [0, 0, 0, 0];
  if (line !== undefined) {
    testX = line.x;
    testY = line.y;
    testWidth = line.width;
    testAngle = line.angle;
  }
  expect(testX).toBe(0);
  expect(testY).toBe(19);
  expect(testWidth).toBe(0);
  expect(testAngle).toBe(0);
});

function testIfSpecifiedLineExists(lineId: string | number) {
  const connectorLine = screen.getByTestId(lineId);
  expect(connectorLine).toBeInTheDocument();
}

function testLinePropertiesMatch(lineId: number | string) {
  const lineState = entityLines.getLineById(lineId);
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

test("Entities must be encapsulated so that many instances can be created", () => {
  expect(true).toBe(false);
});
