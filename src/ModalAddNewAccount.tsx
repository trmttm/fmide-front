import {formEditAccount} from "./setting";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import React from "react";

type propsModalAddNewAccount = { show: boolean, handleClose: () => void };

export function ModalAddNewAccount(props: propsModalAddNewAccount) {
    let show = props.show;
    let handleClose = props.handleClose;

    const title = formEditAccount.titleAddNewAccount;
    const ok = formEditAccount.ok;
    const cancel = formEditAccount.cancel;
    const defaultAccountName = formEditAccount.defaultAccountName;
    return <div>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control type="text" placeholder={defaultAccountName} autoFocus/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>{cancel}</Button>
                <Button variant="primary" onClick={handleClose}>{ok}</Button>
            </Modal.Footer>
        </Modal>
    </div>;
}