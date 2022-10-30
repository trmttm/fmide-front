import React from "react";
import {render, screen} from "@testing-library/react";
import {footerItems} from "./setting";
import {Footer} from "./Footer";


test("Footer text is correct", () => {
    render(<Footer/>);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement.textContent).toBe(footerItems.text)
});
