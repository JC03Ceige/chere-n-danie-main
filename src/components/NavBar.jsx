import React from "react";
import Nav from "react-bootstrap/Nav";

const NavBarCD = () => {
  return (
    <div>
      <Nav className="navBar" activeKey="/home">
        <h1 className="genericHeadings">{"Chére & Danie"}</h1>
      </Nav>
    </div>
  );
};

export default NavBarCD;
