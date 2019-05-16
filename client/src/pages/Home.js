import React from 'react';
import NavBar from '../components/NavBar';
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import LeaderBoardContainer from "../components/LeaderBoardContainer";
import Footer from "../components/Footer"
//import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leader: [],
      memory: [],
      math: [],
      trivia: [],
      minesweeper: []
    };
  }
  
  /*
  componentDidMount() {
    .axios('/api/champions')
    .then((data) => {
      this.setState(data);
    })
  }
  */
  
  render() {
    return (
      <div class="main-container">
        <GameCarousel></GameCarousel>
        <GameMenu></GameMenu>
        <LeaderBoardContainer></LeaderBoardContainer>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
