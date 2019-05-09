import React, { Component } from "react";
import Number from "../Number/index.js";
import { Col, Row, Container } from "../Grid"
import _ from 'lodash';
import "./index.css";

const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Game extends Component {

  state = {
      isGameDone: false,
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


  isNumberAvailable = numberIndex => 
    this.state.selectedIds.indexOf(numberIndex) === -1;


  selectNumber = numberIndex => {
    var selectedIds = this.state.selectedIds;
  
    if (selectedIds.length !== this.props.answerSize) {
      selectedIds.push(numberIndex);
      console.log(selectedIds);
    }
    else {
      this.winOrLoss(selectedIds);
    }
  }
  
  startGame = () => {
      this.intervalId = setInterval(() => {
        this.setState(prevState => {
          const newRemainingSeconds =
            prevState.remainingSeconds - 1;
          if (newRemainingSeconds === 0) {
            clearInterval(this.intervalId);
            console.log("done")
            return { isGameDone: true, remainingSeconds: 60 };
          }
          return { remainingSeconds: newRemainingSeconds };
        });
      }, 1000);
  };

  winOrLoss = selectedIds => {
    const sumSelected = selectedIds.reduce(
      (acc, curr) => acc + this.challengeNumbers[curr],
      0
    );

    if (sumSelected === this.target) {
      console.log(sumSelected)
      this.handleWin();
  
    }
    else {
      console.log(sumSelected)
      this.handleLoss();
    }
  };

  handleWin = () => {
    console.log("win");
    this.setState({
      wins: this.state.wins + 1, 
      selectedIds: [],
      challengeNumbers: this.challengeNumbers,
      target: this.target
    })
  }  

  handleLoss = () => {
    console.log("loss");
    this.setState({
      losses: this.state.losses + 1,
      selectedIds: [],
      challengeNumbers: this.challengeNumbers,
      target: this.target
    })
  }

  render() {
    const { remainingSeconds } = this.state;
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
              <Number 
                key={index}
                id={index} 
                value={value}
                clickable={this.isNumberAvailable(index)}
                onClick={this.selectNumber} />
            )}
            </Row>
          </div>
        <Row>
          <Col size="sm-6">
            <div className="timer">{remainingSeconds}</div>
          </Col>
          <Col size="sm-6">
            <button onClick={this.startGame}>Start</button>
          </Col>
        </Row>  
        <Row>
          <Col size="sm-6">
            <h4 className="text-center">Wins: {this.state.wins}</h4>
            <h4 className="text-center">Losses: {this.state.losses}</h4>
          </Col>
        </Row>  
      </Container>
    );
  }
}

export default Game 