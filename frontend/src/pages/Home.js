import React from 'react'

//Importing npm libraries
import { Link } from "react-router-dom";

//Importing components
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div class="container" style={{marginTop: "15rem"}}>
        <div class="column is-centered">
        <div class="mb-6 pb-3 columns is-multiline">
          <div class="column is-12 is-6-desktop mx-auto has-text-centered">
            <h2 class="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">My Notes App <i class="fa-solid fa-book"></i></h2>
            <p class="subtitle has-text-grey mb-5">This is an assignment created for the purpose of applying as a Software Engineering Intern at Surge Global.</p>
            <div class="buttons is-centered">
            <Link to="/login-admin"><button className='button is-danger is-rounded'>Login as Admin</button></Link>
            <Link to="/login"><button className='button is-warning is-rounded'>Login as Student</button></Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home