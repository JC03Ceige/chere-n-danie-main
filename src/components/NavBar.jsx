import React from "react";
import Nav from "react-bootstrap/Nav";

const NavBarCD = () => {
  return (
    <div>
      <Nav
        className="navBar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Wanneer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Waar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">RSVP</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Algemeen</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBarCD;
