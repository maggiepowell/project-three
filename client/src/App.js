import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MathGame from "./pages/MathGame";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";


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
    return this.props.auth.isAuthenticated();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">          
        <NavBar
            isAuthenticated={this.isAuthenticated}
            login={this.login}
            logout={this.logout}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/MathGame" component={MathGame} />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;