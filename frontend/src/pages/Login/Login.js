import React, { useState, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    //Declare states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFethching, dispatch} = useContext(AuthContext);

    let navigate = useNavigate();

    //Declare Login handling functions
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginDetails = {
        email : email,
        password : password
    }
    try{
        const response = await axios.post("http://localhost:5000/api/user/login",loginDetails)
        dispatch({type:"LOGIN_SUCCESS", payload: response.data});
        navigate("/student-dashboard")

    }catch(err){
        console.log(err);
    }
  };

  //Declare onChange functions
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
        
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
        

  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-black">Login</h3>
              <hr className="login-hr" />
              <p className="subtitle has-text-black">
                Please login to proceed.
              </p>
              <div className="box">
                <form>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Your Email"
                        onChange={onChangeEmail}
                        value = {email}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Your Password"
                        onChange={onChangePassword}
                        value = {password}
                      />
                    </div>
                  </div>
                  <div className="field">
                  </div>
                  <button
                    className="button is-block is-warning is-large is-fullwidth is-rounded"
                    onClick={handleLogin}
                  >
                    Login as Student
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
