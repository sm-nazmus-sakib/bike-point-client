import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../hooks/UseAuth';


const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = UseAuth()
    useEffect(() => {
        fetch(`https://young-basin-54611.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);

    console.log(orders);
    return (
        // <div className="container text-black mt-5 mb-5" >
        //     <div className="row row-cols-1 row-cols-md-3 g-4">
        //         {
        //             orders.length === 0 ?
        //                 <div className=" justify-content-center w-100 d-flex">
        //                     <img src="" alt="" />
        //                 </div>
        //                 :

        //                 orders.map(orders => <div className="col" key={orders._id} >
        //                     <div className="card custom-cart h-100 hover">
        //                         <img src={orders.img} className="img-fluid rounded-start w-100" alt="..." />
        //                         <div className="card-body">
        //                             <h5 className="card-title">{orders.name}</h5>
        //                             <p className="card-text">{orders.Description}</p>
        //                         </div>
        //                         <div className="card-footer  text-center">
        //                             <h5 className="text-warning p-2">Price $: {orders.price}</h5>


        //                         </div>
        //                     </div>
        //                 </div>)
        //         }
        //     </div>
        // </div >
        <div className="container">
<h2 className="  AddServiceHeader p-3  mx-auto mt-1"> You Have {orders.length} Order</h2>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>SL</th>
      <th>Bike Name</th>
      <th>Bike description</th>
    </tr>
  </thead>
  {orders?.map((order, serialNo) => (
    <tbody>
      <tr>
        <td>{serialNo+1}</td>
        <td>{order.name}</td>
        <td>{order.description}</td>
     
      </tr>
    </tbody>
  ))}
</Table>
</div>
    );
};

export default MyOrders;