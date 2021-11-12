import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import './MyOrders.css'

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = UseAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);

  
    const handleDeleteUserOrder = id => {
      const url = `http://localhost:5000/allOrders/${id}`;
        fetch(url, {
            method: 'DELETE'
  
        })
            .then(res => res.json())
            .then(data => {
             
                if (data.deletedCount) {
                    const remaining = orders?.filter(order => order._id !== id);
                    setOrders(remaining);
                    alert('Remove Your Order Successfully')
  
                }
  
            })
  
    }

    return (
     
        <div className="container my-order-container">
<h2 className="  AddServiceHeader p-3  mx-auto mt-1"> You Have {orders.length} Order</h2>

<table role="table" style={{width: "100%"}}>
<thead role="rowgroup" >
    <tr role="row " className="bg-dark text-white mb-3 p-2" style={{border: "1px solid red"}}>
      <th role="columnheader" >Product</th>
      <th role="columnheader">Price</th>
      <th role="columnheader">Status</th>
      <th role="columnheader">Action</th>
    </tr>
  </thead>
  {orders?.map((order) => (
     <tbody role="rowgroup">
     <tr role="row" style={{border: "2px solid gray"}} >
       <td role="cell">{order.name}</td>
       <td role="cell">{order.price}</td>
       <td role="cell">{order.status}</td>
       <td role="cell"> <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUserOrder(order._id)}
                    >
                      Delete
                    </button></td>
     </tr>
     </tbody>
  
  ))}
</table>
</div>
    );
};

export default MyOrders;