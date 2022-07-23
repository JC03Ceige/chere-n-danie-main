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
        <div className="infoCard">
          <InfoCard />
        </div>
      </Container>
    </div>
  );
};

export default MainView;
