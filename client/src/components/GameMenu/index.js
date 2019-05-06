import React from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "../Grid";
import MathIcon from "../HomePageImages/addition-icon.png";
import MemoryIcon from "../HomePageImages/memory-icon.png";
import TriviaIcon from "../HomePageImages/trivia-icon.png";
import MinesIcon from "../HomePageImages/minesweeper-icon.png";
import Card from "react-bootstrap/Card";

function GameMenu() {

  return (
        <Container>
            <Row>
                <Col size="sm-12">
                    <Card>
                        <Row>
                            <Col size="sm-3">
                                <Card>
                                    <h4 className="text-center">Memory Lane</h4>
                                <Card.Img src={MemoryIcon} alt="memory"/>
                                </Card>
                            </Col>
                            <Col size="sm-3">
                                <Card>
                                    <h4 className="text-center">Math Sprint</h4>
                                    <Link to="/MathGame"><Card.Img src={MathIcon} alt="math"/></Link>
                                </Card>
                            </Col>
                            <Col size="sm-3">
                                <Card>
                                <h4 className="text-center">Field Navigator</h4>
                                <Card.Img src={MinesIcon} alt="mines"/>
                                </Card>
                            </Col>
                            <Col size="sm-3">
                                <Card>
                                <h4 className="text-center">Quiz Bowl</h4>
                                    <Card.Img src={TriviaIcon} alt="trivia"/>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
          </Container>
    );

}

export default GameMenu; 