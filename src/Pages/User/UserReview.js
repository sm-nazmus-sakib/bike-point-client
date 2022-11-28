import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";

const UserReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = UseAuth();

  const onSubmit = (data) => {
    axios
      .post("https://bike-point-bd-server-side.vercel.app/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully post your Review");
          reset();
        }
      });
  };

  return (
    <div className=" AddService-container p-4">
      <h2 className="  AddServiceHeader p-3  mx-auto">
        Post a Review    </h2>

      <form
        id="contact"
        className="AddProduct mx-auto rounded shadow-lg p-3 mb-5 bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <input
            placeholder="Enter Your Name"
            type="text"
            required
            value={user.displayName}
            {...register("userName", { required: true, maxLength: 40 })}
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Your Review...."
            required
            {...register("Review")}
          ></textarea>
        </fieldset>

        <fieldset>
          <input
            placeholder=" Image URL"
            type="text"
            required
            {...register("Img")}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder=" Star Rating Between 1 to 5"
            type="number"
            required
            {...register("Rating")}
          />
        </fieldset>

        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            className="btn btn-primary"
          >
            Post Review          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default UserReview;
