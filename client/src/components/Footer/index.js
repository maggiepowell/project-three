import React from "react";
import { Container, Row, Col } from "../Grid"
import "./style.css"

function Footer() {
    return (
        <div className="footer">
            <div className="upper-footer">
                <Container>
                    <Row>
                        <Col size="sm-4">
                            <Col size="sm-1"></Col>
                            <Col size="sm-11">                            
                                <h6 className="contact-header text-left"><u>Contact Us</u></h6>
                            </Col>
                            <Row>
                                <Col size="sm-1">
                                    <i className="fas fa-envelope contact-icon"></i>
                                </Col>
                                <Col size="sm-11">
                                    <div className="contact-text text-left">
                                        123456 Avenue Drive<br/>
                                        San Diego, CA<br/>
                                        92107<br/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="sm-1">
                                    <i className="fas fa-phone contact-icon"></i>
                                </Col>
                                <Col size="sm-11">
                                    <div className="contact-text text-left">555-555-5555</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="sm-1">
                                    <i className="fas fa-at contact-icon"></i>
                                </Col>
                                <Col size="sm-11">
                                    <div className="contact-text text-left">team@campwannagetajob.com</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col size="sm-4">
                            <h6 className="follow-header text-center"><u>Follow Us</u></h6>
                            <div className="text-center">
                                <i className="fab fa-facebook-square fa-3x follow-icon"></i><i className="fab fa-instagram fa-3x follow-icon"></i><i className="fab fa-twitter fa-3x follow-icon"></i>
                            </div>
                        </Col>
                        <Col size="sm-4">
                            <Row>
                                <Col size="sm-12">
                                    <h6 className="text-right about-header"><u>About Us</u></h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="sm-11">
                                    <div className="text-right about-text">Blog</div>
                                </Col>
                                <Col size="sm-1">
                                    <i className="fab fa-blogger-b about-icon"></i>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="sm-11">
                                    <div className="text-right about-text">Github</div>
                                </Col>
                                <Col size="sm-1">
                                    <i class="fab fa-github about-icon"></i>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="sm-11">
                                    <div className="text-right about-text">Our Team</div>
                                </Col>
                                <Col size="sm-1">
                                    <i class="fas fa-user-friends about-icon"></i>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="lower-footer">
            <Container>
                <Row>
                    <Col size="sm-12">
                        <p className="footer-text">Copyright 2019 </p> 
                    </Col>
                </Row>       
            </Container>
            </div>
        </div>
    );
}



export default Footer;