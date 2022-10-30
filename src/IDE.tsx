import React, {useState} from "react";
import {buttonNames} from "./setting";
import Button from "react-bootstrap/Button";
import {ModalAddNewAccount} from "./ModalAddNewAccount";

export function IDE() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow} variant="secondary">{buttonNames.addNewAccount}</Button>
            <ModalAddNewAccount show={show} handleClose={handleClose}/>
        </div>
    );
}