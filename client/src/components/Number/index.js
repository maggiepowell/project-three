import React, { Component } from "react"
import { Col } from "../Grid"
import "./style.css";


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
          <div>
            <h1 className="text-center">
                <div
                    className="number"
                    onClick={this.handleClick}
                >
                    {this.props.value}
                </div>
            </h1>
          </div>
        </Col>
        );
    }
}

export default Number;