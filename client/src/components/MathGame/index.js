import React, { Component } from 'react';
import Game from "../Game";

class MathGame extends Component {

    state = {
    gameId: 1,
  };

  resetGame = () =>
    this.setState(prevState => ({
      gameId: prevState.gameId + 1,
    }));

  render() {
      return (
        <Game
          key={this.state.gameId}
          autoPlay={this.state.gameId > 1}
          challengeRange={[2, 9]}
          challengeSize={6}
          answerSize={4}
          initialSeconds={60}
          onPlayAgain={this.resetGame}
        />
      );
  }

}

export default MathGame;
