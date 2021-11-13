import React, { useEffect, useState } from "react";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://young-basin-54611.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleUpdate = (id) => {
    fetch(`https://young-basin-54611.herokuapp.com/statusUpdate/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Successfully Update Order Status");
  };

  const handleSelectValue = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container manage-all-order-container">
      <h2 className="  AddServiceHeader p-3  mx-auto mt-1">
        Total orders {orders.length}{" "}
      </h2>

      <table role="table" style={{ width: "100%" }}>
        <thead style={{ border: "1px solid red" }}>
          <tr  className="bg-dark text-white mb-3 p-2">
            <th role="columnheader">User Email</th>
            <th role="columnheader">User Name</th>
            <th role="columnheader">Product</th>
            <th role="columnheader">Price</th>
            <th role="columnheader">Address</th>
            <th role="columnheader">Status</th>
            <th role="columnheader">Action</th>
          </tr>
        </thead>
        {orders?.map((order) => (
          <tbody  key={order._id}>
            <tr role="row" style={{ border: "2px solid gray" }}>
              <td role="cell">{order.email}</td>
              <td role="cell">{order.userName}</td>

              <td role="cell">{order.name}</td>
              <td role="cell">{order.price}</td>
              <td role="cell">{order.address}</td>
              <td role="cell">{order.status}</td>
              <td role="cell">
                <td>
                  {" "}
                  <div>
                    <select
                      onChange={handleSelectValue}
                      className="pending p-2 rounded me-3"
                    >
                      <option defaultValue={order.status}>
                        {order.status}
                      </option>
                      <option defaultValue="approved">Approved</option>
                      <option defaultValue="pending">Shipped</option>
                      <option defaultValue="pending">Cancelled</option>
                    </select> 
                    <button
                    className="btn btn-danger"
                    onClick={() => handleUpdate(order._id)}
                  >
                    update
                  </button>
                  </div>
                 
                </td>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageAllOrder;








