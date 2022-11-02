import React from "react";
import * as setting from "../setting";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "lightblue", textAlign: "center" as const }}
    >
      <p>{setting.textFooter}</p>
    </footer>
  );
}
