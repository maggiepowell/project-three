import React from 'react';
import NavBar from '../Components/NavBar';
import GameCarousel from "../Components/GameCarousel";
import GameMenu from "../Components/GameMenu";
import LeaderBoardNavs from "../Components/LeaderBoardNavs";
import LeaderBoard from "../Components/LeaderBoard";
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overall: [],
      memory: [],
      math: [],
      trivia: [],
      minesweeper: []
    }
  }
  
  componentDidMount() {
    axios('/api/champions')
    .then((data) => {
      this.setState(data);
    })
  }
  
  render() {
    return (
      <div>
        <NavBar/>
        <GameCarousel/>
        <GameMenu/>
        <LeaderBoardNavs/>
        <LeaderBoard caption="Overall Champions" data={this.state.overall} />
        <LeaderBoard caption="Memory Champions" data={this.state.memory} />
        <LeaderBoard caption="Math Champions" data={this.state.math} />
        <LeaderBoard caption="Minesweeper Champions" data={this.state.minesweeper} />
        <LeaderBoard caption="Trivia Champions" data={this.state.trivia} />
        <MemoryLeaderBoard/>
        <MathLeaderBoard/>
        <MinesLeaderBoard/>
        <TriviaLeaderBoard/>
      </div>
    );
  }
}

export default Home;
