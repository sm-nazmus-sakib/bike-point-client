import React, { useEffect, useState } from 'react';
// import { Spinner } from "react-bootstrap";

import "./ManageService.css";
const ManageServices = () => {
 
  const [services, setServices] = useState([])
  useEffect(() => {
      fetch('https://young-basin-54611.herokuapp.com/services')
          .then(res => res.json())
          .then(data => setServices(data))
  }, [])

  const handleDelete = id => {
    const url = `https://young-basin-54611.herokuapp.com/services/${id}`;
      fetch(url, {
          method: 'DELETE'

      })
          .then(res => res.json())
          .then(data => {
              if (data.deletedCount) {
                  const remaining = services?.filter(service => service._id !== id);
                  setServices(remaining);
                  alert('Remove From Database Successfully')

              }

          })

  }
  return (
    <div>
      <h2 className=" my-5 services-header p-3 m-3 mx-auto">
Our Bike Collection      </h2>
      <div className="row row-cols-1 row-cols-md-3 m-2  ">
        {services.map((service) => (
          <div className="col mb-4 ">
            <div className="card h-100 ">
              <img
                src={service.Img}
                className="card-img-top p-3 rounded"
                alt="..."
                height="450"
              
              />
              <div className="card-body">
                <h2 className="card-title text-danger">{service.name}</h2>
                <p className="card-text">{service.Description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  <h4 className="text-primary mt-1 mb-5">
                    Price: {service.price}
                  </h4> 
                  <small className="text-muted">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                  </small>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
