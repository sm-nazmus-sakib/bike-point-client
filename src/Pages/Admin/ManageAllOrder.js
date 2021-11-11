import React, { useEffect, useState } from "react";
import './ManageAllOrder.css'

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://young-basin-54611.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
<div className="container" >
<h2 className="  AddServiceHeader p-3  mx-auto mt-1">Total orders {orders.length} </h2>

<table role="table" style={{width: "100%"}}>
<thead role="rowgroup" style={{border: "1px solid red"}} >
<tr role="row " className="bg-dark text-white mb-3 p-2" >
      <th role="columnheader" >User Email</th>
      <th role="columnheader">User Name</th>
      <th role="columnheader">Product</th>
      <th role="columnheader">Price</th>
      <th role="columnheader">Address</th>
      <th role="columnheader">Status</th>
      <th role="columnheader">Action</th>
    </tr>
    </thead>
    {orders?.map((order) => (
     <tbody role="rowgroup">
     <tr role="row" style={{border: "2px solid gray"}} >
       <td role="cell" >{order.email}</td>
       <td role="cell">{order.userName}</td>
      
       <td role="cell">{order.name}</td>
       <td role="cell">{order.price}</td>
       <td role="cell">{order.address}</td>
       <td role="cell">{order.status}</td>
       <td role="cell"> <button
                      className="btn btn-danger"
                      // onClick={() => ShippedOrder(order._id)}
                    >
                      Confirm
                    </button></td>
     </tr>
     </tbody>
  
  ))}
</table>
</div>
  );
};

export default ManageAllOrder;









