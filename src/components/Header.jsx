import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Header3 from "../assets/ring-soen.jpeg";

const Header = () => {
  return (
    <div className="header">
      <Container className="m0 p0" fluid>
        <figure className="position-relative">
          <Image src={Header3} alt="CheréEnDanie" className="headerImg" fluid />
          <figcaption className="heading">
            Kom deel saam in ons spesiale dag . . .
          </figcaption>
        </figure>
      </Container>
    </div>
  );
};

export default Header;
