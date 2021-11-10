import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./addService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  // here Service like as a bike 
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Add This Product");
          reset();
        }
      });
  };

  return (
    <div className=" AddService-container p-4">
      <h2 className="  AddServiceHeader p-3  mx-auto">
Add A New Bike      </h2>

      <form
        id="contact"
        className="AddProduct mx-auto rounded shadow-lg p-3 mb-5 bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <input
            placeholder="Enter Bike Name"
            type="text"
            tabindex="1"
            required
            autofocus
            {...register("name", { required: true, maxLength: 40 })}
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Enter Bike Details...."
            tabindex="5"
            required
            {...register("Description")}
          ></textarea>
        </fieldset>
        <fieldset>
          <input
            placeholder="Price"
            type="number"
            tabindex="1"
            required
            {...register("price")}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Bike Image URL"
            type="text"
            tabindex="4"
            required
            {...register("Img")}
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
            Add New Bike
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddService;
