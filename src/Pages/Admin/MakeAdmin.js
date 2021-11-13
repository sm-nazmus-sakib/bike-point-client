import React from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
  
    fetch("https://young-basin-54611.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
  
    }
    )
      .then((res) => res.json())
      
      .then((result) => console.log(result));
      alert("Successfully Added a New Admin");
   

      
  };
  return (
    <div className="makeAdmin">
      <h2 className=" my-5 services-header p-3 m-3 mx-auto">
        Add A New Admin{" "}
      </h2>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field make-admin-input"
          name="email"
          placeholder="Give Email to Add New Admin "
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Approve Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
