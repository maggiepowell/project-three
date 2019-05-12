import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import MathGame from "./pages/MathGame";
import Home from "./pages/Home";

class App extends Component {

  goTo = (route) => {
    this.props.history.replace(`/${route}`)
  }

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }

  isAuthenticated = () => {
    this.props.auth.isAuthenticated();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    return (
      <div>
        <NavBar
          isAuthenticated={this.isAuthenticated}
          login={this.login}
          logout={this.logout}
        ></NavBar>
        <Home></Home>
      </div>
    );
  }

}

export default App;