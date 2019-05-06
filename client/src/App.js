import React from 'react';
import Home from "./pages/Home";
import MathGame from "./pages/MathGame"
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home}/>
        <Route path="/MathGame" component={MathGame}/>
      </div>
    </Router>
    
  );
}

export default App;
