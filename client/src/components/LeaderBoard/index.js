import React from "react";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "../Grid";

function LeaderBoard() {

    return (
        <Container>
            <Table  bordered hover>
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Total Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>user</td>
                    <td>0000000</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>user</td>
                    <td>0000000</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>user</td>
                    <td>000000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default LeaderBoard;