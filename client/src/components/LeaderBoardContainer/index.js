import React, { Component } from "react";
import LeaderBoard from "../LeaderBoard";
import MathLeaderBoard from "../MathLeaderBoard";
import MemoryLeaderBoard from "../MemoryLeaderBoard";
import MinesLeaderBoard from "../MinesLeaderBoard";
import TriviaLeaderBoard from "../TriviaLeaderBoard";
import { Container } from "../Grid";

function LeaderBoardNavTabs(props) {
return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
        <button
          onClick={() => props.handleComponentChange("LeaderBoard")}
          className={props.currentPage === "LeaderBoard" ? "nav-link active" : "nav-link"}
        >
          Overall Leaderboard
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => props.handleComponentChange("MemoryLeaderBoard")}
          className={props.currentPage === "MemoryLeaderBoard" ? "nav-link active" : "nav-link"}
        >
          Memory Leaderboard
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => props.handleComponentChange("MathLeaderBoard")}
          className={props.currentPage === "MathLeaderBoard" ? "nav-link active" : "nav-link"}
        >
          Math Leaderboard
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => props.handleComponentChange("MinesLeaderBoard")}
          className={props.currentPage === "MinesLeaderBoard" ? "nav-link active" : "nav-link"}
        >
          Mines Leaderboard
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => props.handleComponentChange("TriviaLeaderBoard")}
          className={props.currentPage === "TriviaLeaderBoard" ? "nav-link active" : "nav-link"}
        >
          Trivia Leaderboard
        </button>
      </li>
    </ul>
  );

}


class LeaderBoardContainer extends Component {
    state = {
        currentComponent: "LeaderBoard"
    }

    handleComponentChange = component => {
        this.setState({ currentComponent: component })
    };

    renderComponent = () => {
        if (this.state.currentComponent === "LeaderBoard") {
            return <LeaderBoard />;
        } else if (this.state.currentComponent === "MathLeaderBoard" ) {
            return <MathLeaderBoard />
        } else if (this.state.currentComponent === "MemoryLeaderBoard") {
            return <MemoryLeaderBoard />
        } else if (this.state.currentComponent === "MinesLeaderBoard") {
            return <MinesLeaderBoard />
        } else {
            return <TriviaLeaderBoard />
        }
    };

    render() {
        return (
            <Container>
                <LeaderBoardNavTabs
                    currentComponent={this.state.currentComponent}
                    handleComponentChange={this.handleComponentChange}
                />
                {this.renderComponent()}
            </Container>
        );
    }

}
    

export default LeaderBoardContainer;

