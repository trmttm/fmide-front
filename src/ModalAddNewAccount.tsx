import {formAddNewAccount} from "./setting";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

type propsModalAddNewAccount = { show: boolean, handleClose: () => void };

export function ModalAddNewAccount(props: propsModalAddNewAccount) {
    let show = props.show;
    let handleClose = props.handleClose;
    const title = formAddNewAccount.title;
    const ok = formAddNewAccount.ok;
    const cancel = formAddNewAccount.cancel;

    return <div>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>{cancel}</Button>
                <Button variant="primary" onClick={handleClose}>{ok}</Button>
            </Modal.Footer>
        </Modal>
    </div>;
}