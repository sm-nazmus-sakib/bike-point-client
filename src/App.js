import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking/Booking";
import Login from "./Pages/Login/Login/Login";

import Header from "./Pages/Shared/Header/Header";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/ManageServices/ManageServices";
import Footer from "./Pages/Shared/Header/Footer/Footer";
import About from "./Pages/Home/About/About";
import Contact from "./Pages/Contact/Contact";
import AuthProvider from "./hooks/AuthProvider";
import Register from "./Pages/Register/Register";
import Admin from "./Pages/Admin/Admin";
import User from "./Pages/User/User";
import AllBikes from "./Pages/All Bikes/AllBikes";
import React from "react";
import AdminPrivateRoute from "./AdminPriveRoute/AdminPrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/allBike">
              <AllBikes></AllBikes>
            </Route>

            <Route path="/About">
              <About></About>
            </Route>
           
            
            <Route path="/Register">
              <Register></Register>
            </Route>
           
            <AdminPrivateRoute path="/Admin">Register
              <Admin></Admin>
            </AdminPrivateRoute>
            <PrivateRoute path="/User">
              <User></User>
            </PrivateRoute>


            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/allBikes">
              <AllBikes></AllBikes>
            </Route>
            <Route path="/Contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
