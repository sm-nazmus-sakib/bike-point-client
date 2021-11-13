import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import Logo from "../../images/Logo.png";


import './Register.css'
const Register = () => {
    const { signUp, getEmail, getPassword, getName, error } = UseAuth();

	
    return (

<div className="register-container">
<div className="signup-form">	
    <form  >
	<h4 className="card-title text-center mb-5 fw-light fs-5 ">
                <img src={Logo} width="300" height="100" alt="" /> <br />
                <b className="h3 text-danger">
                  Sign In Bike Sales BD
                </b>
              </h4>
		<p className="lead">It's free and hardly takes more than 30 seconds.</p>
		
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fas fa-user"></i></span>
				<input onBlur={getName}  type="text" className="form-control" name="username" placeholder="Username" id="name"/>
			</div>
        </div>
        <div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="far fa-envelope"></i></span>
				<input  onBlur={getEmail}  type="email" className="form-control" name="email" placeholder="Email Address" id="email"/>
			</div>
        </div>
		<div className="form-group">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock"></i></span>
				<input onBlur={getPassword}  type="password" className="form-control" name="password" placeholder="Password"  id="password"/>
			</div>
        </div>
		<div className="form-group">
		
        </div>        
		<div className="form-group">
		<h5 className="text-center text-danger">{error.message}</h5>
            <button   onClick={signUp} className="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
		<small className="small text-center">By clicking the Sign Up button, you agree to ourTerms and Conditions</small>

        <div className="text-center text-dark ">
			<b>Already have a account ?</b><Link to="/Login" className="text-center text-danger Login-Logout-Button"> <b>Sign in</b></Link></div>
    </form>

</div>

</div>
    );
};

export default Register;

