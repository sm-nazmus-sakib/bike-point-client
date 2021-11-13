import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Booking.css";
import UseAuth from "../../../hooks/UseAuth";

import { useForm } from "react-hook-form";

const Booking = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState({});
  const { user } = UseAuth();

  useEffect(() => {
    fetch(`https://young-basin-54611.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.userName = user.displayName
    data.email = user.email;
    data.status = 'Pending';

    fetch(`https://young-basin-54611.herokuapp.com/addOrders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    alert("order confirmed");
  };

  return (
    <div className="row booking-container">
      <div className=" col-md-5 m-5">
        <div className="card custom-cart mb-3">
          <img src={services.Img} className="card-img-top" alt="..." height="350" />
          <div className="card-body">
            <h1 className="card-title">{services.name}</h1>
            <p className="card-text">{services.Description}</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 add-service">
      <h2 className=" my-2 services-header p-2  mx-auto">
      Confirm Order{" "}
      </h2>
       
<form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form">

 <h5>User Name : {user.displayName}</h5>
 <h5>User Email : {user.email}</h5>


<div className="wrap-input1 validate-input" data-validate="Name is required">
    {/* <input className="input1" value={selected.name} {...register("name")} /> */}
    <input className="input1" type="text" defaultValue={services.name} placeholder="Name" {...register("name", { required: true, })} />
</div>

<div className="wrap-input1 validate-input" data-validate="Subject is required">
    <input className="input1" type="number" defaultValue={services.price} placeholder="price" {...register("price", { required: true, })} />
</div>

<div className="wrap-input1 validate-input" data-validate="Message is required">
    <input className="input1" type="text" defaultValue={services.Description} placeholder="Description" {...register("description", { required: true, })} />
</div>
<div className="wrap-input1 validate-input" data-validate="Message is required">
    <input className="input1" type="text" defaultValue={services.Img} placeholder="Image" {...register("img", { required: true, })} />
</div>
<div className="wrap-input1 validate-input" data-validate="Name is required">
    <input className="input1" type="text" placeholder="Please Provide your address" {...register("address", { required: true, })} />
</div>
<div className="wrap-input1 validate-input" data-validate="Name is required">
    <input className="input1" type="number" placeholder="Please Provide your Number" {...register("address", { required: true, })} />
</div>
<small className="text-danger"> <b>Use Tab to Go Submit</b> </small>
<div className="container-contact1-form-btn">
<button type="submit" className="contact1-form-btn btn-primary rounded m-4 p-1">
              <span>
                Order Now
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
</div>
</form>

      </div>
    </div>
  );
};

export default Booking;
