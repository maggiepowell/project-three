import React from 'react';
import Home from "./pages/Home";
import MathGame from "./pages/MathGame";
import MemoryGame from "./pages/MemoryGame";
import FieldNavGame from "./pages/FieldNavGame";
import Trivia from "./pages/Trivia";
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home}/>
        <Route path="/MathGame" component={MathGame}/>
        <Route path="/MemoryGame" component={MemoryGame}/>
        <Route path="/FieldNavGame" component={FieldNavGame}/>
        <Route path="/Trivia" component={Trivia}/>
      </div>
    </Router>
    
  );
}

export default App;
