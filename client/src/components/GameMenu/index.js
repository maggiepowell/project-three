import React from "react";
import { Container, Row, Col } from "../Grid";
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
                              <div>Game</div>
                            </Card>
                        </Col>
                        <Col size="sm-3">
                            <Card>
                              <div>Game</div>
                            </Card>
                        </Col>
                        <Col size="sm-3">
                            <Card>
                              <div>Game</div>
                            </Card>
                        </Col>
                        <Col size="sm-3">
                            <Card>
                              <div>Game</div>
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