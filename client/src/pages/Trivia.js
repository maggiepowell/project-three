import React, { Component } from 'react';
import Quiz from "../components/trivia";
import Result from "../components/trivia";

class Trivia extends Component {

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  
  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
      return (
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      );
  }

}

export default Trivia;
