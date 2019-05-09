import React, { Component } from "react";
import { Col, Row } from "../Grid";


class Number extends Component {
    
    handleClick = () => {
        if (this.props.clickable) {
            this.props.onClick(this.props.id);
            console.log(this.props.id);
            console.log(this.props.value);
        }
        else {
            console.log("already selected");
        }
    };

    render() {
    return (
        <Col size="sm-6">
            <div className="card">
                <div className="card-body">
                    <h1 className="text-center">
                        <div
                            className="number"
                            onClick={this.handleClick}
                        >
                            {this.props.value}
                        </div>
                    </h1>
                </div>
            </div>
        </Col>
        );
    }
}

export default Number;