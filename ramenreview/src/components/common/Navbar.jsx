import { Container } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = { color: "#fffdd0", fontWeight: "bold" };

  return (
    <Container>
      <nav className="navbar navbar-dark bg-dark">
        <NavLink to='/'  activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {' | '}
        <NavLink to='/ramen'  activeStyle={activeStyle} >
          Ramen DB
        </NavLink>
        {' | '}
        <NavLink to='/top'  activeStyle={activeStyle} >
          Top Ten
        </NavLink>
        {' | '}
        <NavLink to='/about'  activeStyle={activeStyle} >
          About
        </NavLink>
      </nav>
    </Container>
  );
}
