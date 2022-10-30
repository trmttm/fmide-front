import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import * as setting from "./setting";

test("Footer has correct text", () => {
  render(<Footer />);
  const footerElement = screen.getByRole("contentinfo");
  expect(footerElement.textContent).toBe(setting.textFooter);
});

test("Footer has correct background color", () => {
  render(<Footer />);
  const footerElement = screen.getByRole("contentinfo");
  expect(footerElement.style.backgroundColor).toBe("lightblue");
  expect(footerElement).toHaveStyle({ backgroundColor: "lightblue" });
});
