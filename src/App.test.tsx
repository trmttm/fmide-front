import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

test("Menu items should be shown", () => {
    render(<App/>);
    const headerElement = screen.getByRole("Header");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toBeVisible();

});
