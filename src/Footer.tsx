import React from "react";
import {footerCSS, footerItems} from "./setting";

export function Footer() {
    return (<footer style={footerCSS}>
        <p>{footerItems.text}</p>
    </footer>);
}