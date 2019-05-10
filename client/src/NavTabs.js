import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
            <Link
            to="/MathGame"
            className={window.location.pathname === "/MathGame" ? "nav-link active" : "nav-link"}
          >
            MathGame
          </Link>
            </li>
        </ul>
    );
}

export default NavTabs;