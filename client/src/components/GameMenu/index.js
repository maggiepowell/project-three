import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "../Grid";
import MathIcon from "../HomePageImages/addition-icon.png";
import MemoryIcon from "../HomePageImages/memory-icon.png";
import TriviaIcon from "../HomePageImages/trivia-icon.png";
import MinesIcon from "../HomePageImages/minesweeper-icon.png";
import Card from "react-bootstrap/Card";
import MathGame from "../../pages/MathGame"
import "./style.css"


class GameMenu extends React.Component {
  render() {
  return (
        <Container className="container game-menu-container">
            <Row>
                <Col size="sm-12">
                    <Row>
                        <Col size="sm-3">
                        <Link>
                            <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                        <h4 className="text-center">Memory Lane</h4>
                                    <Card.Img src={MemoryIcon} alt="memory"/>
                                </FrontSide>
                                <BackSide>
                                    Game Screen Shot Here
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                        <Col size="sm-3">
                        <Link to="/MathGame">
                             <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <h4 className="text-center">Math Sprint</h4>
                                    <Card.Img src={MathIcon} alt="math"/>
                                </FrontSide>
                                <BackSide>
                                    Game Screen Shot Here
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                        <Col size="sm-3">
                        <Link>
                             <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <h4 className="text-center">Field Navigator</h4>
                                    <Card.Img src={MinesIcon} alt="mines"/>
                                </FrontSide>
                                <BackSide>
                                    Game Screen Shot Here
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                        <Col size="sm-3">
                        <Link>
                            <Flippy
                                flipOnHover={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <h4 className="text-center">Quiz Bowl</h4>
                                    <Card.Img src={TriviaIcon} alt="trivia"/>
                                </FrontSide>
                                <BackSide>
                                    Game Screen Shot Here
                                </BackSide>
                            </Flippy>
                        </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );

  }

}

export default GameMenu; 