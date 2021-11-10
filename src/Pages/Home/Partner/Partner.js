import React from "react";
import "./Partner.css";
import partner1 from "../../../images/Partner/basis.png";
import partner2 from "../../../images/Partner/bimanbd.png";
import partner3 from "../../../images/Partner/iata-logo.png";
const Partner = () => {
  return (
    <div>
      <h2 className=" my-5 partner-header p-3 m-3 mx-auto">
        Accredited Partner
      </h2>

      <div className="container mt-5 text-center partner" id="Shop">
        <div className="container p-3 mt-5 mb-5 rounded shadow bg-body">
          <div className="row row-cols-1 row-cols-md-3 ">
            <div className="  mx-auto col">
              <div className="">
                <img src={partner1} />
              </div>
            </div>

            <div className="  mx-auto col ">
              <div className="">
                <img src={partner2} />
              </div>
            </div>
            <div className="  mx-auto col ">
              <div className="">
                <img src={partner3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
