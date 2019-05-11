import React, { Component } from 'react';
import Quiz from "../components/trivia";
import Results from "../components/trivia";

class Trivia extends Component {
  render() {
      return (
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      );
  }

}

export default Trivia;
