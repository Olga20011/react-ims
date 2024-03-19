import React from 'react';
import { Link } from 'react-router-dom'; 


function RegisterPage() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-sm-8"> {/* Adjust col size as needed for desired width */}
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-5">
              <div className="text-center">
                <div>
              <h1 className="h1 text-black mb-7">Welcome to IMS!</h1>
              </div>
                <h2 className="h4 text-gray-900 mb-4">Create an Account!</h2>
              </div>
              <form className="user">
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                </div>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                  </div>
                  <div className="col-sm-6">
                    <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                  </div>
                </div>
                <Link to="/login" className="btn btn-primary btn-user btn-block">Register Account</Link>
                
                <hr />
                <Link></Link>
                <a href="index.html" className="btn btn-google btn-user btn-block">
                  <i className="fab fa-google fa-fw" /> Register with Google
                </a>
                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                  <i className="fab fa-facebook-f fa-fw" /> Register with Facebook
                </a>
              </form>
              <hr />
              <div className="text-center">
                <a className="small" href="forgot-password.html">Forgot Password?</a>
              </div>
              <div className="text-center">
              <Link to="/login" className="small">Already have an account? Login!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
