import React from "react";
import "./Service.css";

import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, Description, Img } = service;
  return (
    <div className="col mb-4 " id="services">
      <div className="card h-100 ">
        <img
          src={Img}
          className="card-img-top p-3 rounded"
          alt="..."
          height="450"
        
        />
        <div className="card-body">
          <h2 className="card-title text-danger">{name}</h2>
          <p className="card-text">{Description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <h4 className="text-primary mt-1 mb-5">Price: ${price}</h4>{" "}
            <Link to={`/booking/${_id}`}>
              <button className="btn btn-danger mb-3">Order Bike</button>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Service;
