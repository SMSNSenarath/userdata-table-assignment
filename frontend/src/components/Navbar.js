//Importing Libraries
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
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link to = "/" class="navbar-item" style={{fontSize:"1.5rem", backgroundColor:"transparent"}}>
        Home
      </Link>
    </div>
    {/* Once a user logged in, shows user's name in the button */}
    {user?(<div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <button class="button is-primary is-rounded" style={{backgroundColor:"#a8dadc", color:"#2B2D42"}}>
            <strong>{user.firstName} ({user.accountType.charAt(0).toUpperCase() +
                        user.accountType.slice(1)})</strong>
          </button>
          {/* Logout button */}
          <button class="button is-light is-rounded" style={{color: "#2B2D42"}} onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </div>):("")}
  </div>
</nav>
    </>
  )
}

export default Navbar

