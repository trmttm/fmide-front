import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {IDE} from "./IDE";
import {buttonNames, formAddNewAccount} from "./setting";


function getAddNewButton() {
    let buttonText = buttonNames.addNewAccount;
    return screen.getByRole("button", {name: buttonText});
}

test("Button addNewAccount is shown", () => {
    render(<IDE/>);
    const button = getAddNewButton();
    expect(button).toHaveTextContent(buttonNames.addNewAccount);
});

test("Button addNewAccount ask user for account name", () => {
    render(<IDE/>);
    const button = getAddNewButton();
    fireEvent.click(button);
    const inputElement = screen.getByText(formAddNewAccount.title);
    expect(inputElement).toBeInTheDocument();
});

test("Button addNewAccount updates state", () => {
});

test("Button addNewAccount adds new account HTML element", () => {
});
