import React, { Component } from 'react';
import "./style.css";
import { Navbar, Nav, Button } from 'react-bootstrap';
// import auth0 from 'auth0-js';
import Logo from "../HomePageImages/logo.png" 

class NavBar extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props;
    return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="home">
            <img src={Logo}
            alt="logo" 
            width="300"
            height="80"
            className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Nav className="navbar">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
          {
            !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={login.bind(this)}
                >
                  Log In
                </Button>
              )
          }
          {
            isAuthenticated() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={logout.bind(this)}
                >
                  Log Out
                </Button>
              )
          }
        </Navbar>
        );
      }
  }
//  NavBar = () => {
//     const { isAuthenticated } = this.props.auth;
    // return (
    // <Navbar bg="dark" variant="dark">
    //     <Navbar.Brand href="home"><img className="img-fluid" src="../HomePageImages/logo.png" alt="logo"/></Navbar.Brand>
    //     <Nav className="navbar">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
    //       <Nav.Link href="#contact">Contact Us</Nav.Link>
    //     </Nav>
    //     {
    //       !isAuthenticated() && (
    //           <Button
    //             id="qsLoginBtn"
    //             bsStyle="primary"
    //             className="btn-margin"
    //             onClick={this.login.bind(this)}
    //           >
    //             Log In
    //           </Button>
    //         )
    //     }
    //     {
    //       isAuthenticated() && (
    //           <Button
    //             id="qsLogoutBtn"
    //             bsStyle="primary"
    //             className="btn-margin"
    //             onClick={this.logout.bind(this)}
    //           >
    //             Log Out
    //           </Button>
    //         )
    //     }
    //   </Navbar>
    //   );
    // }
// }
    
    export default NavBar;