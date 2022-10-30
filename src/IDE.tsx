import React from "react";
import {buttonNames} from "./setting";
import Button from "react-bootstrap/Button";

export function IDE() {
    return (
        <Button variant="secondary">{buttonNames.addNewAccount}</Button>
    );
}