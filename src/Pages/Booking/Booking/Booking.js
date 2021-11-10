import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Booking.css";
import UseAuth from "../../../hooks/UseAuth";
import BookingBanner from '../../../images/BookingBanner.jpg';

const Booking = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState({});
  const { user } = UseAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const confirmBooking = () => {
    alert("Successfully Booked your Tour Package");
  };
  return (
    <div className="  Booking-Container  " id="About">
        <div>
        <img src={BookingBanner} alt="" className="img-fluid w-100 BookingBanner" />
      </div>
      <div className=" mb-4 ">
        <div className="row d-flex">
          <div className="col-md-6 ">
            <div className="card m-5">
              <img
                className="card-img-top "
                src={services.Img}
                alt="Card image cap" 
              />
              <div className="card-body">
                <h2 className="card-title text-danger">{services.name}</h2>
                <h6 className="card-text">{services.Description} </h6>
                <h4 className="card-text text-primary">
                  Budget: ${services.price}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-6  p-5 my-auto mx-auto">
            <div className="card m-2">
              <div className="card-body">
                <h2 className="card-title text-danger">Hi {user.displayName} !!</h2>
                <small>Please Confirm Your Booking</small>
                <form className=" mx-auto Confiramtion">
                  <fieldset>
                    <input
                      placeholder="Name"
                      type="text"
                      value={user.displayName}
                      tabindex="1"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      placeholder="Email"
                      type="email"
                      value={user.email}
                      tabindex="1"
                      required
                    />
                  </fieldset>

                  <fieldset>
                    <textarea
                      placeholder="Address"
                      tabindex="5"
                      required
                    ></textarea>
                  </fieldset>
                  <fieldset>
                    <input
                      placeholder="Contact Number"
                      type="number"
                      minlength="11"
                      maxlength="11"
                      tabindex="1"
                      required
                    />
                  </fieldset>

                  <fieldset>
                    <input
                      placeholder="Cupon Code"
                      type="text"
                      tabindex="1"
                      autofocus
                    />
                  </fieldset>

                  <fieldset>
                    <button
                      onClick={confirmBooking}
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                      className="btn btn-primary"
                    >
                      Confirm
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
