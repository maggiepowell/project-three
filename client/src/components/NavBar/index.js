import React from "react";
import "./style.css";
import { Col } from "../Grid";
import Logo from "../HomePageImages/logo.png"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {

    return (
        <Navbar className="bg-dark">
            <div className="container">
                <Col size="sm-4">
                    <Navbar.Brand href="#home"><img className="img-fluid" src={Logo} alt="logo"/></Navbar.Brand>
                </Col>
                <Col size="sm-8">
                    <Nav className="float-right nav">
                        <Nav.Link href="#">Games</Nav.Link>
                        <Nav.Link href="#">Leader Boards</Nav.Link>
                        <Nav.Link href="#home">Login</Nav.Link>
                    </Nav>
                </Col>
            </div>
        </Navbar>
        );
}

export default NavBar;