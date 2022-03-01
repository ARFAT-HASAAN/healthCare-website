import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Doctors from "../Doctor/Doctors";

import Gallery from "../Gallery/Gallery";
import LifeStyle from "../LifeStyle/LifeStyle";

import Services from "../Service/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <LifeStyle></LifeStyle>
      <Gallery></Gallery>
      <Contact></Contact>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
