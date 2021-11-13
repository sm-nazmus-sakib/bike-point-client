import React from "react";
import {  useLocation, useHistory ,Link} from "react-router-dom";
import UseAuth from "./../../../hooks/UseAuth";
import Logo from "../../../images/Logo.png";
import './Login.css'
import GoogleImage from "../../../images/Google Logo.png";
import GitHubLogo from "../../../images/GitHubLogo.png";
const Login = () => {
  const { signInUsingGoogle, setUser ,signInUsingGitHub,getPassword,getEmail,signInWithEmail, error,setError} = UseAuth();

  
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/Home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect);
    });
  };
  const handleGitHubLogin = () => {
    signInUsingGitHub().then((result) => {
      history.push(redirect);
    });
  };

  return (
    <div className="Login-container ">
      <div className="row w-75 mx-auto">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5 mx-auto">
            <div className="card-body p-4 p-sm-5">
              <h4 className="card-title text-center mb-5 fw-light fs-5 ">
                <img src={Logo} width="100" height="100" alt="" /> <br />
                <b className="h3 text-danger">
                  Sign In Bike Sales BD
                </b>
              </h4>
              <p className="text-danger text-center">{error}</p>
              <div>
                <div className="form-floating mb-3">
                  <input onBlur={getEmail}
                    type="email"
                    className="form-control "
                    placeholder="name@example.com"
                    id="email"
                  />
                  <label ><i className="far fa-envelope"></i> Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"  onBlur={getPassword}
                  />
                  <label ><i className="fa fa-lock"></i> Password</label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                   
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <p></p>
                  <button className="btn btn-primary" onClick={() => {
                            signInWithEmail()
                                .then((result) => {
                                    const user = result.user;
                                    setUser(user);
                                    history.push(redirect);
                                })
                                .catch((err) => {
                                    const errorMessage = err.message;
                                    setError(errorMessage);
                                });
                        }}>
                    Sign in
                  </button>
                </div>

                <div className="text-center ">
               <b> Don't have an account?</b>
               <Link to="/Register" className="text-center text-danger Login-Logout-Button ">
<b>               Sign up
</b>
             </Link>
           </div>
                {/* <p>
                  or <br /> Login with
                </p> */}
                <div className=" mb-2"></div>
              </div>
              {/* <button
                className=" me-4"
                onClick={handleGoogleLogin}
              >
                <img src={GoogleImage} className="Login-Btn" alt="" width="50" height="50" />
              </button> */}

              {/* <button
                className=" me-4"
                onClick={handleGitHubLogin}
              >
                <img src={GitHubLogo} className="Login-Btn" alt="" width="50" height="50" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
