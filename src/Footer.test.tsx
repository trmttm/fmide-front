import React from "react";
import {render, screen} from "@testing-library/react";
import {footerItems} from "./setting";
import {Footer} from "./Footer";


test("Footer has correct text", () => {
    render(<Footer/>);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement.textContent).toBe(footerItems.text)
});

test("Footer has correct background color", () => {
    render(<Footer/>);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement.style.backgroundColor).toBe('lightblue');
    expect(footerElement).toHaveStyle({backgroundColor: 'lightblue'});
});
