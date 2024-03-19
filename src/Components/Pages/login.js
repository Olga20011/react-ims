import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; 
import ajaxUser from '../../Utils/remote/ajaxUser';
import { error } from 'jquery';


function Login() {

  const [username,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleLogin = async(e) =>{
    e.preventDefault();
    if(username.length>0 && password.length>0){
    // setLoading(true);
    const server_response = await ajaxUser.loginUser(username,password)
    console.log(server_response)
    // setLoading(false);

    if(server_response.status==="OK"){
        localStorage.setItem('mysystem@user', server_response.details)
        console.log("here",server_response.details)
        navigate('/home')
        window.location.reload();
      
      }
  }
  else{
    console.log("Please input both username and password!")
  }
  
}


    return (
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-sm-8">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-8 mx-auto"> {/* Center the column horizontally */}
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">

                      <div className="form-group">
                                    <input type="text" 
                                    value={username}
                                    onChange={(e)=>setUserName(e.target.value)}
                                    className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                        <label className="custom-control-label" htmlFor="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <Link to="" className="btn btn-primary btn-user btn-block"
                                  onClick={handleLogin}
                                >Login</Link>
                               
                                <hr />
                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw" /> Login with Google
                                </a>
                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                                </a>
                        
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html"
                        >Create an Account!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



export default Login;
