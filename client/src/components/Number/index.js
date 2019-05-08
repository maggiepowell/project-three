import React, { Component } from "react";
import { Col, Row } from "../Grid";


class Number extends Component {
    
    handleClick = () => {
    if (this.props.clickable) {
      this.props.onClick(this.props.id);
    }
    };

    render() {
    return (
        <Col size="sm-6">
            <div className="card">
                <div class="card-body">
                    <h1 className="text-center">
                        <div
                            className="number"
                            style={{ opacity: this.props.clickable ? 1 : 0.3 }}
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