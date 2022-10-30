import React from "react";
import { render, screen } from "@testing-library/react";
import { menuItems } from "./setting";
import { Header } from "./Header";

test("Menu items should be shown", () => {
  render(<Header />);

  Object.keys(menuItems).forEach((menuText) => {
    let menuElement = screen.getByText(menuText);
    expect(menuElement).toBeInTheDocument();
  });
});
