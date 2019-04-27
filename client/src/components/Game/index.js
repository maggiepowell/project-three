import React, { Component } from "react";
import Number from "../Number/index.js";
import _ from 'lodash';
import "./index.css";


const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const colors = {
  new: 'lightblue',
  playing: 'deepskyblue',
  won: 'lightgreen',
  lost: 'lightcoral',
};


class Game extends Component {
  state = {
    gameStatus: 'new', // new, playing, won, lost
    remainingSeconds: this.props.initialSeconds,
    selectedIds: [],
  };
  challengeNumbers = Array.from({
    length: this.props.challengeSize,
  }).map(() =>
    randomNumberBetween(...this.props.challengeRange)
  );
  target = _.sum(
    _.sampleSize(this.challengeNumbers, this.props.answerSize)
  );
  componentDidMount() {
    if (this.props.autoPlay) {
      this.startGame();
    }
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  isNumberAvailable = numberIndex =>
    this.state.selectedIds.indexOf(numberIndex) === -1;

  startGame = () => {
    this.setState({ gameStatus: 'playing' }, () => {
      this.intervalId = setInterval(() => {
        this.setState(prevState => {
          const newRemainingSeconds =
            prevState.remainingSeconds - 1;
          if (newRemainingSeconds === 0) {
            clearInterval(this.intervalId);
            return { gameStatus: 'lost', remainingSeconds: 0 };
          }
          return { remainingSeconds: newRemainingSeconds };
        });
      }, 1000);
    });
  };

  selectNumber = numberIndex => {
    this.setState(
      prevState => {
        if (prevState.gameStatus !== 'playing') {
          return null;
        }
        const newSelectedIds = 
          [ ...prevState.selectedIds, numberIndex ];
        return {
          selectedIds: newSelectedIds,
          gameStatus: this.calcGameStatus(newSelectedIds),
        };
      },
      () => {
        if (this.state.gameStatus !== 'playing') {
          clearInterval(this.intervalId);
        }
      }
    );
  };
  calcGameStatus = newSelectedIds => {
    const sumSelected = newSelectedIds.reduce(
      (acc, curr) => acc + this.challengeNumbers[curr],
      0
    );
    if (newSelectedIds.length !== this.props.answerSize) {
      return 'playing';
    }
    return sumSelected === this.target ? 'won' : 'lost';
  };

  render() {
    const { gameStatus, remainingSeconds } = this.state;
    return (
      <div className="game">
        <div className="help">
          Pick {this.props.answerSize} numbers that sum to the
          target in {this.props.initialSeconds} seconds
        </div>
        <div
          className="target"
          style={{ backgroundColor: colors[gameStatus] }}
        >
          {gameStatus === 'new' ? 'TARGET' : this.target}
        </div>
        <div className="challenge-numbers">
          {this.challengeNumbers.map((value, index) =>
            <Number
              key={index}
              id={index}
              value={gameStatus === 'new' ? '?' : value}
              clickable={this.isNumberAvailable(index)}
              onClick={this.selectNumber}
            />
          )}
        </div>
        <div className="footer">
          {gameStatus === 'new' &&
            <button onClick={this.startGame}>Start</button>
          }

          {gameStatus === 'playing' &&
            <div className="timer-value">{remainingSeconds}</div>
          }

          {['won', 'lost'].includes(gameStatus) &&
            <button onClick={this.props.onPlayAgain}>
              Play Again
            </button>
          }
        </div>
      </div>
    );
  }
}

export default Game;