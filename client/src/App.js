import React from 'react';
import Home from "./pages/Home";
import NavBar from "./components/NavBar"
import MathGame from "./pages/MathGame"
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <div>
        <NavBar></NavBar>
        <MathGame></MathGame>
      </div>
    
  );
}

export default App;
