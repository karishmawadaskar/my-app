import React from "react";
import "./navbar.css";

function navbar() {
    return (
        <div className="navbar-container">
        <h1 >
        routing
        </h1>
        <div className="navbar">
        <a href="/"className="navbar-page">Home</a>
        <a href="/about" className="navbar-page">About</a>
        <a href="/contact" className="navbar-page">Contact</a>
    </div>
    </div>
    )
}
export default navbar;