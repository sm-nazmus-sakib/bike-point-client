import React from "react";
import spinner from '../../../images/spinner.gif'
import { Redirect, Route } from "react-router";
import UseAuth from "../../../hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = UseAuth();
  if (isLoading) {
    return  <div className=" justify-content-center w-100 d-flex">
    <img src={spinner} alt="" width="300" height="300"/>
</div>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
