import React from 'react';
import NavBar from './components/NavBar'
import GameCarousel from "./components/GameCarousel"
import { Container, Row, Col } from "./components/Grid";
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <GameCarousel/>
    </div>
    
  );
}

export default App;
