import React, { Component } from 'react';
import Game from "../components/Game";

class MathGame extends Component {
  render() {
      return (
        <div>
          <Game
            challengeRange={[2, 9]}
            challengeSize={6}
            answerSize={4}
            initialSeconds={60}
          />
        </div>
      );
  }

}

export default MathGame;
