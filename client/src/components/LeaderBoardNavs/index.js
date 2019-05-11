import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import ToggleDisplay from 'react-toggle-display';
import OverallLeaderBoard from "../OverallLeaderBoard";
import MathLeaderBoard from "../MathLeaderBoard";
import MemoryLeaderBoard from "../MemoryLeaderBoard";
import { Container } from "../Grid";



class LeaderBoardNavs extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
        };      
    }


    handleClick = () => {
        this.setState({
            show: !this.state.show
        })
    }


    render() {
    return (
        <div>
            <Container>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link onClick={() => this.handleClick}>Overall Leader Board</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.handleClick}>Memory Lane</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.handleClick}>Math Sprint</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.handleClick}>Field Navigator</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.handleClick}>Quiz Bowl</Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.containerView()}
            </Container>
        </div>
    );

    }
};

export default LeaderBoardNavs; 

