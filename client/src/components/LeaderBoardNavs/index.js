import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Leaderboard from "../LeaderBoard"
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
                <Tabs>
                    <TabList>
                        <Tab>Overall Leaderboard</Tab>
                        <Tab>Memory Leaderboard</Tab>
                        <Tab>Math Leaderboard</Tab>
                        <Tab>Sweeper Leaderboard</Tab>
                        <Tab>Quiz Leaderboard</Tab>
                    </TabList>

                    <TabPanel>
                        <Leaderboard/>
                    </TabPanel>
                    <TabPanel>
                        <MemoryLeaderBoard/>
                    </TabPanel>
                    <TabPanel>
                        <MathLeaderBoard/>
                    </TabPanel>
                    <TabPanel>
                        <MinesLeaderBoard/>
                    </TabPanel>
                    <TabPanel>
                        <TriviaLeaderBoard/>
                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    );

    }
};

export default LeaderBoardNavs; 

