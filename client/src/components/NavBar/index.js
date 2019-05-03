import React from "react";
import "./style.css";
import { Container } from "../Grid";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Camp Wannagetajob</Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#features">User Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        );
}

export default NavBar;