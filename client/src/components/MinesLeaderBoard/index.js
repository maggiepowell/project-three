 
 /*
 import React, { Component } from 'react';
 import ZingGrid from 'zinggrid';
 import { Container, Row, Col } from "../Grid";
 import "../LeaderBoard/style.css"

class MinesLeaderBoard extends Component {

   constructor(props) {
    super(props);
    this.state = {
      leader: []
    }
  }

  

 initialize data to grid
 componentDidMount() {
   axios('/api/champions')
    .then((response) => {
      this.setState(response);
    });
     //bset state and reflect that change through attribute mutation
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
 */