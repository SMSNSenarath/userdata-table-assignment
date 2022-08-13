//Importing Libraries
import React from "react";
import { Link } from "react-router-dom";

//Importing Components
import Navbar from "../../components/Navbar";

//Importing CSS
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div class="mainbox">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link to="/">home</Link> and try from there.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;