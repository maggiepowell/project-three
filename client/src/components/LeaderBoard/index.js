import React, { Component } from 'react';
import ZingGrid from 'zinggrid';
import { Container, Row, Col } from "../Grid";
import "./style.css"

class LeaderBoard extends Component {
  // We are using JSON.stringify because that is the proper way to pass an object to an attribute
  // per the HTML spec. alternatively you can use ZingGrid api to setdata if you do
  // not want a string form of data in the DOM tied to an attribute
  render() {
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            <zing-grid className="leader-board" id="Leaderboard" caption={this.props.caption} data={JSON.stringify(this.props.data)}></zing-grid>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LeaderBoard;