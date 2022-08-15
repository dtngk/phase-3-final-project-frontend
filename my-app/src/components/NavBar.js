// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
    display: "flex",
    background: 'black',
    padding: '5px 5px 5px 5px',
    fontSize: '20px',
    margin: '1px',
    width: '150px',
    border: '5px solid blue',
};

function NavBar() {

    return (
        <nav className="navbar">
            <NavLink to="/" style={styles}> Main </NavLink>
            <NavLink to="/company" style={styles}>Company</NavLink>
            <NavLink to="/toy" style={styles}>Toy</NavLink>
            <NavLink to="/store" style={styles}>Store</NavLink>
        </nav>
    );
}

export default NavBar;