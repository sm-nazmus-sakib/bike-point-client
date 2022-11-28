import React from "react";
import "./Footer.css";
import Logo from "../../../../images/Logo.png";
import Payment from "../../../../images/Payment.png"
const Footer = () => {

  return (
    <div>
      <div className="footer-container ">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-center">
                <img src={Logo} alt="" width="250" height="100" />
                <h3>Bike Point BD</h3>

                <p className="mt-4 ">
                  <small>
                    Most Popular Bike Company In Bangladesh
                  </small>
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>

                <input
                  className="footer-input text-center"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <button className="btn btn-primary">Subscribe</button>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <h5><i className="fas fa-phone-alt"></i> +88 01777-111111</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p><i className="fas fa-map-marker-alt"></i> 1205 Azimpur, Dhaka Bangladesh.</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-3">
              <div className="left-container text-center mt-2 mx-auto">
                <h3>Pay With</h3>

                <img src={Payment} alt="" width="100%" height="150px" className="mx-auto" />

              </div>
            </div>
          </div>
          <p className="p-2">
            <small>
              &copy;Bike Point BD . All rights
              reserved, Sakib-2022
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
