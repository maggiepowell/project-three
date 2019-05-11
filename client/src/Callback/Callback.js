import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import LeaderBoardNavs from "../components/LeaderBoardNavs";
import LeaderBoard from "../components/LeaderBoard";

class Callback extends Component {
  render() {

    return (
      <div>
        <NavBar
          isAuthenticated={this.isAuthenticated}
          login={this.login}g
          
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

export default Callback;
