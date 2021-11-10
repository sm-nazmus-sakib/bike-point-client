import React, { useEffect, useState } from "react";
import spinner from '../../../images/spinner.gif'

import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div id="services ">
    <h2 className=" my-5 services-header p-3 m-3 mx-auto">
  Top Review   </h2>
{reviews.length===0 ? <span>   <div className=" justify-content-center w-100 d-flex">
                              <img src={spinner} alt="" width="300" height="300"/>
                          </div></span>:(<div className="row row-cols-1 row-cols-md-3 m-2  ">
      {reviews.map((review) => (
        <div className="col mb-4 " id="services">
        <div className="card h-100 ">
          <img
            src={review.Img}
            className="card-img-top p-3 rounded"
            alt="..."
            height="450"
          
          />
          <div className="card-body">
            <h2 className="card-title text-danger">{review.name}</h2>
            <p className="card-text">{review.Description}</p>
          </div>
          <div className="card-footer">
           
          </div>
        </div>
      </div>

      ))}
    </div>)}



  </div>
  );
};

export default Review;









