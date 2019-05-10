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
            <li className="nav-item">
            <Link
            to="/MemoryGame"
            className={window.location.pathname === "/MemoryGame" ? "nav-link active" : "nav-link"}
          >
            MemoryGame
          </Link>
            </li>

        </ul>
    );
}

export default NavTabs;