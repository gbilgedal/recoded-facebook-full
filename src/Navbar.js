import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import db from "./firebase";
function Navbar() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (
        <Container>
            <NavLink to="/facebook">Home</NavLink>
            &nbsp;&nbsp;
            <NavLink to="/helloworld">Log In</NavLink>
            &nbsp;&nbsp;
            <NavLink to="/helloworld">Sign Up</NavLink>
            &nbsp;&nbsp;
            {isLoggedIn && <NavLink to="/id?=">Profile</NavLink>}
            {isLoggedIn && <NavLink to="/facebook" onClick={()=>console.log("hellooo")}>Log Out</NavLink>}

        </Container>
    );
}

export default Navbar;
