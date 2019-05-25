import React from "react";
import HtmlQuestions from "./HtmlQuestions.json"
import Quiz from "react-quiz-component";

class HTMLQuiz extends React.Component {

    render() {
        return (
            <div>
                <Quiz quiz={HtmlQuestions}/>
            </div>
        );
    }

}

export default HTMLQuiz;