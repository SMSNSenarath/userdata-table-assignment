import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";

const LoginAdmin = () => {
  //Declare states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFethching, dispatch } = useContext(AuthContext);

  let navigate = useNavigate();

  //Declare Login handling functions
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        loginDetails
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      const user = response.data;
      if(user.accountType == "admin"){
        navigate("/admin-dashboard");
      }else{
        alert("Access denied! You are not an admin!");
      }
      
    } catch (err) {
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
    <Navbar/>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h2 className="title" style={{color:"#2B2D42", fontSize: "3rem"}}>Login</h2>
              <hr className="login-hr" />
              <p className="subtitle" style ={{color:"#2B2D42"}}>
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
                        value={email}
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
                        value={password}
                      />
                    </div>
                  </div>
                  <div className="field"></div>
                  <button
                    className="button is-hovered is-block is-warning is-large is-fullwidth is-rounded has-text-white"
                    onClick={handleLogin}
                    style={{backgroundColor:"#EF233C"}}
                  >
                    Login as Admin
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

export default LoginAdmin;
