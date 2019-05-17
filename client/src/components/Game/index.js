import React, { Component } from "react";
import Number from "../Number/index.js";
import MathGameModal from "../MathGameModal";
import MathGameResultModal from "../MathGameResultModal"
import { Col, Row, Container } from "../Grid";
import _ from 'lodash';
import "./style.css";

const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;


class MinesweeperGame extends Component {

  getChallengeNumbers = () => { 
    return Array.from({
      length: this.props.challengeSize,
    }).map(() =>
      randomNumberBetween(...this.props.challengeRange)
    );
  }


  getTargetNumber = (numbers) => {
      return _.sum(
      _.sampleSize(numbers, this.props.answerSize)
    );
  }

  state = {
      hasGameStarted: false,
      remainingSeconds: this.props.initialSeconds,
      selectedIds: [],
      target: 0,
      challengeNumbers: [],
      wins: 0,
      losses: 0
    };
  
  componentDidMount() {
    this.resetGame();
  }

  resetGame = () => {
    let numbers = this.getChallengeNumbers();
    let target = this.getTargetNumber(numbers);
    this.setState({
      hasGameEnded: false,
      target: target,
      challengeNumbers: numbers,
      selectedIds: []
    })
    console.log(numbers)
  }

  isNumberAvailable = numberIndex => 
    this.state.selectedIds.indexOf(numberIndex) === -1;


  selectNumber = numberIndex => {
    var selectedIds = this.state.selectedIds;
    selectedIds.push(numberIndex);
    console.log(selectedIds);

    if (selectedIds.length === this.props.answerSize) {
      this.winOrLoss(selectedIds);
    }
  }
  
  startTimer = () => {
      this.intervalId = setInterval(() => {
        this.setState(prevState => {
          const newRemainingSeconds =
            prevState.remainingSeconds - 1;
          if (newRemainingSeconds === 0) {
            clearInterval(this.intervalId);
            return { hasGameEnded: true, remainingSeconds: 10 };
          }
          return { hasGameEnded: false, remainingSeconds: newRemainingSeconds };
        });
      }, 1000);
  };

  winOrLoss = selectedIds => {

    const sumSelected = selectedIds.reduce(
      (acc, curr) => acc + this.state.challengeNumbers[curr],
      0
    );

    console.log(this.state.target);

    if (sumSelected === this.state.target) {
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
    })
    this.resetGame();
    
  }  

  handleLoss = () => {
    console.log("loss");
    this.setState({
      losses: this.state.losses + 1,
    })
    this.resetGame();
  }

  showResults = () => {
    if (this.state.hasGameEnded === true)
    return (
      <MathGameResultModal 
        onClick={this.startTimer}
      />
    )
  }

  render() {
    const { remainingSeconds } = this.state;
    return (
      <div className="game-body">
        <div><MathGameModal
          onClick={this.startTimer}
        /></div>
        <div>{this.showResults()}</div>
        <Container>
          <div className="game-container">
            <Row>
              <Col size="sm-12">
                <h1 className="text-center">
                    Target Number: 
                </h1>
              </Col>
            </Row>
            <Row>
              <Col size="sm-3"></Col>
              <Col size="sm-6">
                  <h1 className="target text-center">{this.state.target}</h1>
              </Col>
              <Col size="sm-3"></Col>
            </Row>
            <Row>
            <Col size="sm-12">
              <div className="challenge-numbers">
                <Row>
                {this.state.challengeNumbers.map((value, index) =>
                  <Number 
                    key={index}
                    id={index} 
                    value={value}
                    clickable={this.isNumberAvailable(index)}
                    onClick={this.selectNumber} />
                )}
                </Row>
              </div>
            </Col>
            </Row>
          </div>
          </Container>
          <Container>
              <Row>
                <Col size="sm-6">
                  <div className="time-score">
                    <h4>Seconds Remaining:</h4>
                    <div className="timer">{remainingSeconds}</div>
                  </div>
                </Col>
                <Col size="sm-6">
                  <div className="time-score">
                    <h4 className="text-center">Wins: {this.state.wins}</h4>
                    <h4 className="text-center">Losses: {this.state.losses}</h4>
                  </div>
                </Col>
              </Row>  
          </Container>
        </div>

    );
  }
}

export default MinesweeperGame;