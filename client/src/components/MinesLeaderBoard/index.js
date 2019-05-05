import React, { Component } from 'react';
import ZingGrid from 'zinggrid';
import { Container, Row, Col } from "../Grid";
import "../OverallLeaderBoard/style.css"

class MinesLeaderBoard extends Component {

  // initialize variables
  constructor(props) {
    super(props);
    this.state = {
      overall: []
    }
  }

  // initialize data to grid
  componentDidMount() {
    // set state and reflect that change through attribute mutation
    this.setState(() => {
      return {
        "mines": [
          {
            "username": "user1",
            "points": "10000"
          },
          {
            "username": "user2",
            "points": "10000"
          },
          {
            "username": "user3",
            "points": "10000"
          }
        ]
      }
    });
  }

  // We are using JSON.stringify because that is the proper way to pass an object to an attribute
  // per the HTML spec. alternatively you can use ZingGrid api to setdata if you do
  // not want a string form of data in the DOM tied to an attribute
  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            <zing-grid id="MinesLeaderBoard" caption="Sweeper Champions" data={JSON.stringify(this.state.mines)} loading></zing-grid>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MinesLeaderBoard;