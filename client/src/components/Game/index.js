import React from "react";
import "./index.css"

function Game () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1>42</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1>6</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1>8</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1>3</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1>2</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1>5</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1>1</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    );
}

export default Game