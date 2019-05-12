import React from 'react';
import NavBar from '../components/NavBar';
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import LeaderBoardNavs from "../components/LeaderBoardNavs";
import LeaderBoard from "../components/LeaderBoard";
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
      <div>
        <GameCarousel/>
        <GameMenu/>
        <LeaderBoardNavs/>
      </div>
    );
  }
}

export default Home;
