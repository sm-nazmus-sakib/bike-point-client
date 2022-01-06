import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Review.css";
import Rating from 'react-rating';


const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://young-basin-54611.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h2 className="  AddServiceHeader p-3  mx-auto mt-1 mb-3">
         
        Happy Clients Says
      </h2>

      <div
        className=" bg-secondary
    text-white pb-5 pt-1 pt-3 w-75 mx-auto p-4 rounded"
      >
        <Carousel>
          {reviews?.map((review) => (
            <Carousel.Item key={review._id}>
              <div className="d-flex justify-content-center text-center review-slider">
                <div className="mb-5">
                  <h2 className="text-warning h1">{review?.userName}</h2>
                  <br />
                  <p> {(review?.Review).slice(0, 200)}</p>
                  <img src={review?.Img} alt="" width="250" height="200" />

                 <br /> <br />
                  
                  <Rating className="star"
                                            initialRating={Number(review.Rating)}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly></Rating>
                 



                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
