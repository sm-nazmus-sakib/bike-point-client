import React, { useEffect, useState } from "react";
import spinner from '../../images/spinner.gif'
import { Table } from "react-bootstrap";
// import "./Review.css";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://young-basin-54611.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
<div className="container">
<h2 className="  AddServiceHeader p-3  mx-auto mt-1">Total orders {orders.length} </h2>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>SL</th>
      <th>Bike Name</th>
      <th>Bike description</th>
      <th>User Mail</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  {orders?.map((order, serialNo) => (
    <tbody>
      <tr>
        <td>{serialNo+1}</td>
        <td>{order.name}</td>
        <td>{order.description}</td>
        <td>{order.email}</td>
        <td>
          <form>
            <select
            >
              <option value={order?.status}>{order?.status}</option>
              <option value="approve">approve</option>
              <option value="done">Done</option>
            </select>
            <input type="submit" />
          </form>
        </td>
        <button className="btn bg-danger p-2">Delete</button>
        <button className="btn bg-success p-2">Update</button>
      </tr>
    </tbody>
  ))}
</Table>
</div>
  );
};

export default ManageAllOrder;









