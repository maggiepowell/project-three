import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import MathGame from "./pages/MathGame";
// import MemoryGame from "./pages/MemoryGame";
// import FieldNavGame from "./pages/FieldNavGame";
import Trivia from "./pages/Trivia";
// import OverallLeaderBoard from "./components/OverallLeaderBoard";
// import MemoryLeaderBoard from "./components/MemoryLeaderBoard";
// import MathLeaderBoard from "./components/MathLeaderBoard";
// import MinesLeaderBoard from "./components/MinesLeaderBoard";
// import TriviaLeaderBoard from "./components/TriviaLeaderBoard";


function App() {
  return (
    <div>
    <Router>
      <NavTabs />
      <Route exact path="/" component={Home}/>
        <Route exact path="/MathGame" component={MathGame}/>
        {/* <Route exact path="/MemoryGame" component={MemoryGame}/>
        <Route exact path="/FieldNavGame" component={FieldNavGame}/>*/}
        <Route exact path="/Trivia" component={Trivia}/> 
        {/* <Route exact path="/OverallLeaderBoard" component={OverallLeaderBoard}/>
        <Route exact path="/MemoryLeaderBoard" component={MemoryLeaderBoard}/>
        <Route exact path="/MathLeaderBoard" component={MathLeaderBoard}/>
        <Route exact path="/MinesLeaderBoard" component={MinesLeaderBoard}/>
        <Route exact path="/TriviaLeaderBoard" component={TriviaLeaderBoard}/> */}
    </Router>
    </div>
  );
}

export default App;
