import React from "react";
import {render, screen} from "@testing-library/react";
import {IDE} from "./IDE";
import {buttonNames} from "./setting";


test("Button addNewAccount is shown", () => {
    render(<IDE/>);
    const buttonText = buttonNames.addNewAccount;
    const button = screen.getByRole("button", {name: buttonText});
    expect(button).toHaveTextContent(buttonText);
});
