import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
            <li className="nav-item">
            <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home Page
          </Link>
            </li>
            
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

            <li className="nav-item">
            <Link
            to="/FieldNavGame"
            className={window.location.pathname === "/FieldNavGame" ? "nav-link active" : "nav-link"}
          >
            FieldNavGame
          </Link>
            </li>

            <li className="nav-item">
            <Link
            to="/Trivia"
            className={window.location.pathname === "/Trivia" ? "nav-link active" : "nav-link"}
          >
            Trivia
          </Link>
            </li>

        </ul>
    );
}

export default NavTabs;