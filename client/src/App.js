import React from 'react';
import './App.css';
import Quiz from './components/trivia';

function App() {
  return (
<div>
  <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz</h2>
      </div>
      <Question content="What is your favourite food?" />
    </div>
  </div>  );
}

export default App;
