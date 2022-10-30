import {menuItems} from "./setting";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function addMenuItem(text: string, id: number) {
    const link = menuItems[text];
    return <Nav.Link key={id} href={link}>{text}</Nav.Link>
}

export function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {Object.keys(menuItems).map(addMenuItem)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}