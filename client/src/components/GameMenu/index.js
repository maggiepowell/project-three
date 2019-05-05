import React from "react";
import { Container, Row, Col } from "../Grid";
import MathIcon from "../HomePageImages/addition-icon.png";
import MemoryIcon from "../HomePageImages/memory-icon.png";
import TriviaIcon from "../HomePageImages/trivia-icon.png";
import MinesIcon from "../HomePageImages/minesweeper-icon.png";
import Card from "react-bootstrap/Card";

function GameMenu() {
  return (
    <div>
      <Container>
          <Row>
              <Col size="sm-12">
                <Card>
                    <Row>
                        <Col size="sm-3">
                            <Card>
                                <h4 className="text-center">Memory Lane</h4>
                              <Card.Img src={MemoryIcon} alt="memory"/>
                              <p>Category: 
                                    <a href="#"> Memorization</a>
                                </p>
                            </Card>
                        </Col>
                        <Col size="sm-3">
                            <Card>
                                <h4 className="text-center">Math Sprint</h4>
                                <Card.Img src={MathIcon} alt="math"/>
                                <p>Category: 
                                    <a href="#"> Logical Thinking</a>
                                </p>
                            </Card>
                        </Col>
                        <Col size="sm-3">
                            <Card>
                              <h4 className="text-center">Field Navigator</h4>
                               <Card.Img src={MinesIcon} alt="mines"/>
                                <p>Category: 
                                    <a href="#"> Logical Thinking</a>
                                </p>
                            </Card>
                        </Col>
                        <Col size="sm-3">
                            <Card>
                              <h4 className="text-center">Quiz Bowl</h4>
                                <Card.Img src={TriviaIcon} alt="trivia"/>
                                <p>Category: 
                                    <a href="#"> Coding Trivia</a>
                                </p>
                            </Card>
                        </Col>
                    </Row>
                </Card>
              </Col>
            </Row>
        </Container>
    </div>
    );
}

export default GameMenu; 