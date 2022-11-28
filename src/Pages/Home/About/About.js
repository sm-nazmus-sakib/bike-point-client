import React from "react";
import ABoutImg from "../../../images/About.jpg";
import AboutHeader from "../../../images/About-Header.png";
import "./About.css";
const About = () => {
  return (
    <div className="  About-Container " id="About">
      <div>
        <img
          src={AboutHeader}
          alt=""
          width="100%"
          height="300px"
          className="mb-3"
        />
      </div>
      <h2 className=" my-5 About-header p-3 m-3 mx-auto"> About Bike Point BD</h2>
      <div className=" mb-4 ">
        <div className="row d-flex">
          <div className="col-md-6 ">
            <img src={ABoutImg} alt="" width="100%"/>
          </div>
          <div className="col-md-6  p-5 my-auto mx-auto">
            <h1 className="text-danger mb-2">
              <b>Bike Point BD</b>
            </h1>
            <h5 className="about-text p-4">
            carsales.com Ltd (ASX: CAR) is the largest online automotive, motorcycle and marine classifieds business in Australia. Attracting more Australians interested in buying or selling cars, motorcycles, trucks, caravans and boats than any other classified group of websites. Together with its subsidiaries employing over 600 people in Australia, carsales develops world leading technology and advertising solutions that drive its business around the world. carsales.com Ltd has operations across the Asia Pacific region and has interests in leading online automotive classified businesses in Brazil, South Korea, Malaysia, Indonesia, Thailand and Mexico.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
