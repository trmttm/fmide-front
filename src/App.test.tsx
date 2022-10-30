import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";
import {menuItems} from "./setting";

test("Menu items should be shown", () => {
    render(<App/>);


    Object.keys(menuItems).forEach(menuText => {
        let menuElement = screen.getByText(menuText);
        expect(menuElement).toBeInTheDocument();
    })

});
