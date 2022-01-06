import React from "react";
import Banner from "../Banner/Banner";
import Decoration from "../Decoration/Decoration";
import Partner from "../Partner/Partner";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
   <Decoration></Decoration>
      <Review></Review>
      <Partner></Partner>
    </div>
  );
};

export default Home;
