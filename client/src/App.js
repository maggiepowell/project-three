import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import GameCarousel from "./components/GameCarousel";
import GameMenu from "./components/GameMenu";
import LeaderBoardNavs from "./components/LeaderBoardNavs";
import LeaderBoard from "./components/LeaderBoard";
import MemoryLeaderBoard from "./components/MemoryLeaderBoard";
import MathLeaderBoard from "./components/MathLeaderBoard";
import MinesLeaderBoard from "./components/MinesLeaderBoard";
import TriviaLeaderBoard from "./components/TriviaLeaderBoard"

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
        <GameCarousel></GameCarousel>
        <GameMenu></GameMenu>
        <LeaderBoardNavs></LeaderBoardNavs>
        <LeaderBoard></LeaderBoard>
      </div>
    );
  }
}

export default App;