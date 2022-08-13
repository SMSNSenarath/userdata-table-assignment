import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {useNavigate, Link} from "react-router-dom";



const Navbar = () => {
  const {user} = useContext(AuthContext);
  let navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
    window.location.reload(true);
  }
  
  
  
  return (
    <>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation" style={{backgroundColor:"#2B2D42"}}>
  <div class="navbar-brand">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link to = "/" class="navbar-item" style={{fontSize:"1.5rem", backgroundColor:"transparent"}}>
        Home
      </Link>
    </div>

    {user?(<div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" style={{backgroundColor:"#a8dadc", color:"#2B2D42"}}>
            <strong>{user.firstName} ({user.accountType.charAt(0).toUpperCase() +
                        user.accountType.slice(1)})</strong>
          </a>
          <a class="button is-light" style={{color: "#2B2D42"}} onClick={handleLogout}>
            Log out
          </a>
        </div>
      </div>
    </div>):("")}
  </div>
</nav>
    </>
  )
}

export default Navbar

