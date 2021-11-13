import React, { useEffect, useState } from "react";
import spinner from "../../images/spinner.gif";
import { Link } from "react-router-dom";

const AllBikes = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://young-basin-54611.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services ">
      <h2 className=" my-5 services-header p-3 m-3 mx-auto">
        All Bikes in Our Showroom{" "}
      </h2>
      {services.length === 0 ? (
        <span>
          {" "}
          <div className=" justify-content-center w-100 d-flex">
            <img src={spinner} alt="" width="300" height="300" />
          </div>
        </span>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 m-2  ">
          {services.map((service) => (
            <div className="col mb-4 " id="services" key={service._id}>
              <div className="card h-100 ">
                <img
                  src={service.Img}
                  className="card-img-top p-3 rounded"
                  alt="..."
                  height="450"
                />
                <div className="card-body">
                  <h2 className="card-title text-danger">{service.name}</h2>
                  <p className="card-text">{(service.Description).slice(0, 300)}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <h4 className="text-primary mt-1 mb-5">
                      Price: ${service.price}
                    </h4>{" "}
                    <Link to={`/booking/${service._id}`}>
                      <button className="btn btn-danger mb-3">
                        Order Bike
                      </button>
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBikes;
