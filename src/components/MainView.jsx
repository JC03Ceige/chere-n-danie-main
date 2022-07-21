import React from "react";
import Container from "react-bootstrap/Container";

import Header from "./Header";
import InfoCard from "./InfoCard";

import NavBar from "./NavBar";

const MainView = () => {
  return (
    <div>
      <Container fluid>
      <NavBar />
      <Header />

      {/* Logo body wrapped in div */}
     
      <div className="infoCard">
        <InfoCard />
      </div>
      </Container>
    </div>
  );
};

export default MainView;
