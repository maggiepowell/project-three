import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import MathGame from "./pages/MathGame";
import MemoryGame from "./pages/MemoryGame";
import FieldNavGame from "./pages/FieldNavGame";
import Trivia from "./pages/Trivia";

function App() {
  return (
    <div>
    <Router>
      <NavTabs />
      <Route exact path="/" component={Home}/>
        <Route exact path="/MathGame" component={MathGame}/>
        <Route exact path="/MemoryGame" component={MemoryGame}/>
        <Route exact path="/FieldNavGame" component={FieldNavGame}/>
        <Route exact path="/Trivia" component={Trivia}/>
    </Router>
    </div>
  );
}

export default App;
