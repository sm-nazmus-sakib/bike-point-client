import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/Banner-1.jpg";
import banner2 from "../../../images/banner/Banner-2.jpg";
import banner3 from "../../../images/banner/Banner-3.jpg";
import {  Nav,  } from "react-bootstrap";

import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div className="Banner">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            height="600"
            alt="First slide"
          />
          <Carousel.Caption>




          <Nav.Link as={HashLink} to="/allBikes">
          <button className="btn btn-danger rounded pills"><h3>Bike Collection <i className="far fa-arrow-alt-circle-right"></i></h3></button>
            </Nav.Link>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            height="600"
            alt="Second slide"
          />

          <Carousel.Caption> <Nav.Link as={HashLink} to="/allBikes">
          <button className="btn btn-danger rounded pills"><h3>Bike Collection <i className="far fa-arrow-alt-circle-right"></i></h3></button>
            </Nav.Link></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            height="600"
            alt="Third slide"
          />

          <Carousel.Caption> <Nav.Link as={HashLink} to="/allBikes">
          <button className="btn btn-danger rounded pills"><h3>Bike Collection <i className="far fa-arrow-alt-circle-right"></i></h3></button>
            </Nav.Link></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
