import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const ViewNotesList = () => {
  
  const [notes, setNotes] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const {user} = useContext(AuthContext);
  const token = {
    headers: {token: user.accessToken},
  }

  const handleClick = () => {
    setIsModal(!isModal);
    console.log(isModal);
  };

  useEffect(() => {
   const getNotes = async () => {
    const res = await axios.get(`http://localhost:5000/api/note/view-all-notes/${user._id}`, token);
    setNotes(res.data.notesOfUser);
   }
   getNotes();
  }, [user._id]);

  console.log(notes);
  

  const active = isModal ? "is-active" : "";

  return (
    <div class="column is-two-thirds has-text-left">
      <h1 class="title is-1">My Notes</h1>
      {/* 1st Note  */}
      {notes?.map((note)=>{
        return(<div class="card">
        <header class="card-header">
          <p class="card-header-title">{note.title}</p>
          <button class="card-header-icon" aria-label="more options">
          </button>
        </header>
        <div class="card-content">
          <div class="content">{note.description}
            <br />
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item" onClick={handleClick}>
            Edit
          </a>
          <a href="#" class="card-footer-item">
            Delete
          </a>
        </footer>
      </div>)
      })}

      {/* Modal */}
      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button
              onClick={handleClick}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <h1 class="title is-1">Edit a Note</h1>
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input is-medium" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea class="textarea is-medium"></textarea>
              </div>
            </div>
            <div class="control">
              <button
                type="submit"
                class="button is-link is-fullwidth has-text-weight-medium is-medium mb-3"
              >
                Create Note
              </button>
              <button
                type="submit"
                class="button is-link is-fullwidth has-text-weight-medium is-medium"
                onClick={handleClick}
              >
                Cancel
              </button>
            </div>
          </section>
        </div>
      </div>
      {/* Modal */}
    </div>
  );
};

export default ViewNotesList;