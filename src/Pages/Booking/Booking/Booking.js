import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Booking.css";
import UseAuth from "../../../hooks/UseAuth";
import BookingBanner from '../../../images/BookingBanner.jpg';
import { useForm } from 'react-hook-form';




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


  const onSubmit = data => {
    // console.log(user.email);
    data.email = user.email
    fetch(`https://young-basin-54611.herokuapp.com/addOrders`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((result) => console.log(result));
    
    alert('order confirmed')
};


  const confirmBooking = () => {
    alert("Successfully Booked your Tour Package");
  };

  return (
    // <div className="  Booking-Container  " id="About">
    //     <div>
    //     <img src={BookingBanner} alt="" className="img-fluid w-100 BookingBanner" />
    //   </div>
    //   <div className=" mb-4 ">
    //     <div className="row d-flex">
    //       <div className="col-md-6 ">
    //         <div className="card m-5">
    //           <img
    //             className="card-img-top "
    //             src={services.Img}
    //             alt="Card image cap" 
    //           />
    //           <div className="card-body">
    //             <h2 className="card-title text-danger">{services.name}</h2>
    //             <h6 className="card-text">{services.Description} </h6>
    //             <h4 className="card-text text-primary">
    //               Budget: ${services.price}
    //             </h4>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-6  p-5 my-auto mx-auto">
    //         <div className="card m-2">
    //           <div className="card-body">
    //             <h2 className="card-title text-danger">Hi {user.displayName} !!</h2>
    //             <small>Please Confirm Your Booking</small>
    //             <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto Confiramtion">
    //               <fieldset>
    //                 <input
    //                   placeholder="Name"
    //                   type="text"
    //                   value={user.displayName}
    //                   tabindex="1"
    //                   required
    //                 />
    //               </fieldset>
    //               <fieldset>
    //                 <input
    //                   placeholder="Email"
    //                   type="email"
    //                   value={user.email}
    //                   tabindex="1"
    //                   required
    //                 />
    //               </fieldset>

    //               <fieldset>
    //                 <textarea
    //                   placeholder="Address"
    //                   tabindex="5"
    //                   required
    //                 ></textarea>
    //               </fieldset>
    //               <fieldset>
    //                 <input
    //                   placeholder="Contact Number"
    //                   type="number"
    //                   minlength="11"
    //                   maxlength="11"
    //                   tabindex="1"
    //                   required
    //                 />
    //               </fieldset>

    //               <fieldset>
    //                 <input
    //                   placeholder="Cupon Code"
    //                   type="text"
    //                   tabindex="1"
    //                   autofocus
    //                 />
    //               </fieldset>

    //               <fieldset>
    //                 <button
    //                   onClick={confirmBooking}
    //                   name="submit"
    //                   type="submit"
    //                   id="contact-submit"
    //                   data-submit="...Sending"
    //                   className="btn btn-primary"
    //                 >
    //                   Confirm
    //                 </button>
    //               </fieldset>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>



    <div className='row'>
    <div className=" col-md-6">
        <div className="card custom-cart mb-3">
            <img src={services.Img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h1 className="card-title">{services.name}</h1>
                <p className="card-text">{services.Description}</p>
            </div>
        </div>
    </div>


    <div className='col-md-6 add-service'>
        <form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form">

            <span className="contact1-form-title">
                Order
            </span>
            <div className="wrap-input1 validate-input" data-validate="Name is required">
                {/* <input className="input1" value={selected.name} {...register("name")} /> */}
                <input className="input1" type="text" defaultValue={services.name} placeholder="Name" {...register("name", { required: true, })} />
            </div>

            <div className="wrap-input1 validate-input" data-validate="Subject is required">
                <input className="input1" type="number" defaultValue={services.price} placeholder="price" {...register("price", { required: true, })} />
            </div>

            <div className="wrap-input1 validate-input" data-validate="Message is required">
                <input className="input1" type="text" defaultValue={services.Description} placeholder="Name" {...register("description", { required: true, })} />
            </div>
            <div className="wrap-input1 validate-input" data-validate="Message is required">
                <input className="input1" type="text" defaultValue={services.Img} placeholder="Name" {...register("img", { required: true, })} />
            </div>

            <div className="container-contact1-form-btn">
                <button type='submit' className="contact1-form-btn">
                    <span>
                        Order Now
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
        </form>
    </div>

</div >


  );
};

export default Booking;





















 


  

