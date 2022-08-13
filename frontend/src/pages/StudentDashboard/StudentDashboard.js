//Importing Libraries
import React from "react";

//Importing Components
import CreateNote from "../../components/CreateNote";
import ViewNotesList from "../../components/ViewNotesList";
import Navbar from "../../components/Navbar";

const StudentDashboard = () => {
  return (
    <>
        <Navbar/>
      <section class="hero is-fullheight" style={{marginTop: "-5rem"}}>
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-8 is-variable ">
              <ViewNotesList />
              <CreateNote />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;