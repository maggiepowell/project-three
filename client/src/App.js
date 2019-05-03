import React from 'react';
import NavBar from './components/NavBar';
import GameCarousel from "./components/GameCarousel";
import GameMenu from "./components/GameMenu";
import LeaderBoard from "./components/LeaderBoard"
import { Container, Row, Col } from "./components/Grid";
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <GameCarousel/>
      <GameMenu/>
      <LeaderBoard/>
    </div>
    
  );
}

export default App;
