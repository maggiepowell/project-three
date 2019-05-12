import React, { Component } from "react";
import { Tabs, Tab } from 'react-bootstrap-tabs';
import "react-tabs/style/react-tabs.css";
import LeaderBoard from "../LeaderBoard";
import ReactDOM from 'react-dom';
import MathLeaderBoard from "../MathLeaderBoard";
import MemoryLeaderBoard from "../MemoryLeaderBoard";
import MinesLeaderBoard from "../MinesLeaderBoard";
import TriviaLeaderBoard from "../TriviaLeaderBoard";
import { Container } from "../Grid";



class LeaderBoardNavs extends Component {

    render() {
    return (
        <div>
            <Container>
                <Tabs id="leaderboard-navs"a>
                    <Tab eventKey="leaderboard" label="LeaderBoard"><LeaderBoard /></Tab>
                    <Tab eventKey="mathboard" label="Math LeaderBoard"><MathLeaderBoard /></Tab>
                </Tabs>
            </Container>
        </div>
    );

    }
};

export default LeaderBoardNavs;

