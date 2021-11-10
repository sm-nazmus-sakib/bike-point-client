import React, { useState } from "react";
import AddService from "../AddService/AddService";
import ManageServices from "../ManageServices/ManageServices";
import MakeAdmin from "./MakeAdmin";
import ManageAllOrder from "./ManageAllOrder";

const Admin = () => {
  const [active, setActive] = useState("ManageAllOrder");

  return (
    <div className="row admin">
      <div className="d-flex flex-column flex-shrink-0 bg-light vh-700 col-md-1 p-4  col-3">
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li
            className="nav-link active py-3 border-bottom nav-item"
            onClick={() => setActive("ManageAllOrder")}
          >
             
            <i className="fa fa-home"></i> <small>Manage All Orders</small>
          </li>

          <li
            className="nav-link py-3 border-bottom"
            onClick={() => setActive("add service to DB")}
          >
             
            <i className="fa fa-first-order"></i> <small>Add A Product</small>
          </li>


          <li
            className="nav-link py-3 border-bottom"
            onClick={() => setActive("Remove Service")}
          >
             
            <i className="fa fa-cog"></i> <small>Manage Products</small> 
          </li>

          <li
            className="nav-link py-3 border-bottom"
            onClick={() => setActive("MakeAdmin")}
          >
             
            <i className="fa fa-cog"></i> <small>Make Admin</small> 
          </li>
        </ul>
      </div>
      <div className="col-md-11 col-9">
        {(active === "ManageAllOrder" && <ManageAllOrder></ManageAllOrder>) ||
          (active === "add service to DB" && <AddService></AddService>) ||
          (active === "Remove Service" && <ManageServices></ManageServices>) ||
          (active === "MakeAdmin" && <MakeAdmin> </MakeAdmin>)}
      </div>
    </div>
  );
};

export default Admin;
