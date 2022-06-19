import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import profile from "./resume.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";

const Login = () => {
  return (
    <>
      <form>
        <div class="row w-100 d-flex justify-content-center align-items-center main-div">
          <div className="card">
            <div class="card-body">
              <div className="container-profile d-flex justify-content-center align-items-center">
                <img src={profile} alt="profile" className="profile"></img>
              </div>
              <h1 className="d-flex justify-content-center align-items-center">
                User-Login
              </h1>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
              
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1" />
                
              </div>
             
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              <hr></hr>
              <p className="text-center my-3 text-capitalize">
                <span>
                  <b>Connect with us</b>
                </span>
              </p>
              <div className="row mx-auto d-flex">
                <div className="col-3 text-center">
                  <a href="#" target="">
                    <img src={facebook} alt="profile" className="icons"></img>
                  </a>
                </div>

                <div className="col-3 text-center">
                  <a href="#" target="">
                    <img src={instagram} alt="profile" className="icons"></img>
                  </a>
                </div>

                <div className="col-3 text-center">
                  <a href="#" target="">
                    <img src={linkedin} alt="profile" className="icons"></img>
                  </a>
                </div>

                <div className="col-3 text-center">
                  <a href="#" target="">
                    <img src={twitter} alt="profile" className="icons"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
