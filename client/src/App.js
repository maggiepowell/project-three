import React from 'react';
import Home from "./pages/Home";
import MathGame from "./pages/MathGame"
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <MathGame/>
      </div>
    </Router>
    
  );
}

export default App;
