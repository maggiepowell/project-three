import React, { Component } from "react";
import Number from "../Number/index.js";
import { Col, Row, Container } from "../Grid"
import _ from 'lodash';
import "./index.css";


const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Game extends Component {
  state = {
    gameStatus: "new",
    remainingSeconds: this.props.initialSeconds,
    selectedIds: [],
    wins: 0,
    losses: 0,
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
      this.startGame();
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
            return { gameStatus: 'done', remainingSeconds: 0 };
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
     if (sumSelected === this.target) {
      this.setState({ wins: this.wins + 1});
    }
    else {
      this.setState({ losses: this.losses + 1});
      console.log(this.state.losses)
    }
  return "new"
}

  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            <div className="help text-center">
                Instructions here
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-3"></Col>
          <Col size="sm-6">
            <div className="card">
              <div className="card-body">
                <h1 className="target text-center">{this.target}</h1>
              </div>
            </div>
          </Col>
          <Col size="sm-3"></Col>
        </Row>
          <div className="challenge-numbers">
            <Row>
            {this.challengeNumbers.map((value, index) =>
              <Number key={index} value={value} />
            )}
            </Row>
          </div>
        <Row>
          <Col size="sm-12">
            <div class="timer">{this.props.initialSeconds}</div>
          </Col>
        </Row>    
      </Container>
    );
  }
}

export default Game 