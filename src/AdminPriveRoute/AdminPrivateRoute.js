import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../hooks/UseAuth";

const AdminPrivateRoute = ({ children, ...rest }) => {
  const { isAdmin } = UseAuth();
  if (!isAdmin) {
    return <div className=" justify-content-center w-100 d-flex"></div>;
  }

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default AdminPrivateRoute;
