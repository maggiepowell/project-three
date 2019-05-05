import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Container } from "../Grid";

function LeaderBoardNavs() {
    return (
        <div>
            <Container>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Overall</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Memory Lane</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Math Sprint</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Field Navigator</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">Quiz Bowl</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );
};

export default LeaderBoardNavs; 

