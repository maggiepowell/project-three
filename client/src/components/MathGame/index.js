import React, { Component } from 'react';
import Game from "../Game";

class MathGame extends Component {


  render() {
    return (
      <Game
        challengeRange={[2, 9]}
        challengeSize={6}
        answerSize={4}
        initialSeconds={60}
      />
    );
  }
}

export default MathGame;
