import React from "react";

import NavBar from "./HomePage/NavBar";
import Intro from "./HomePage/Intro";
import About from "./HomePage/About";
import Work from "./HomePage/Work";
import Footer from "./HomePage/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />

      <Intro />

      <About />

      <Work />
      <Footer />
    </>
  );
};

export default HomePage;
