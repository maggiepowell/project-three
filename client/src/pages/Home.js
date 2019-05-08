import React from 'react';
import NavBar from '../components/NavBar';
import GameCarousel from "../components/GameCarousel";
import GameMenu from "../components/GameMenu";
import LeaderBoardNavs from "../components/LeaderBoardNavs";
import OverallLeaderBoard from "../components/OverallLeaderBoard";
import MemoryLeaderBoard from "../components/MemoryLeaderBoard";
import MathLeaderBoard from "../components/MathLeaderBoard";
import MinesLeaderBoard from "../components/MinesLeaderBoard";
import TriviaLeaderBoard from "../components/TriviaLeaderBoard"

function Home() {
  return (
    <div>
      <NavBar/>
      <GameCarousel/>
      <GameMenu/>
      <LeaderBoardNavs/>
      <OverallLeaderBoard/>
      <MemoryLeaderBoard/>
      <MathLeaderBoard/>
      <MinesLeaderBoard/>
      <TriviaLeaderBoard/>
    </div>
    
  );
}

export default Home;
