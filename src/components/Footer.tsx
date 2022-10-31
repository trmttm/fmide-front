import React from "react";
import * as setting from "../setting";
import { footerCSS } from "../setting";

export function Footer() {
  return (
    <footer style={footerCSS}>
      <p>{setting.textFooter}</p>
    </footer>
  );
}
