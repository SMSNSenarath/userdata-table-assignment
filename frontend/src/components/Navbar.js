import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom";


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
      <a class="navbar-item">
        Home
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    {user?(<div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>{user.firstName} ({user.accountType.charAt(0).toUpperCase() +
                        user.accountType.slice(1)})</strong>
          </a>
          <a class="button is-light" onClick={handleLogout}>
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

