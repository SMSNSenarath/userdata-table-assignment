//Importing Libraries
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

//Passing the single note to Note component
const Note = ({ note }) => {
  const [isModal, setIsModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(AuthContext);
  const token = {
    headers: { token: user.accessToken },
  };

  const handleClick = () => {
    setIsModal(!isModal);
    console.log(isModal);
  };

  //Declare onChange functions
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleUpdate = async () => {
    const updatedNote = {
      title: title,
      description: description,
    }
    const res = await axios.put(`http://localhost:5000/api/note/update/${user._id}/${note._id}`, updatedNote, token)
    .then(()=>{
        alert("Note updated successfully!");
        window.location.reload()
    })
    .catch((err)=>{
        alert(err);
    })
    console.log(res);
  };



  const active = isModal ? "is-active" : "";
  return (
    <>
      <div class="card" style={{ marginBottom: "10px" }}>
        <header class="card-header">
          <p class="card-header-title">{note.title}</p>
          <button class="card-header-icon" aria-label="more options"></button>
        </header>
        <div class="card-content">
          <div class="content">
            {note.description}
            <br />
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" onClick={handleClick}>
            Edit
          </a>
          {/* Delete note */}
          <a
            class="card-footer-item"
            onClick={async () => {
              console.log(note);
              await axios.delete(
                `http://localhost:5000/api/note/delete/${user._id}/${note._id}`,
                token
              );
              window.location.reload();
              alert("Note deleted successfully!");
            }}
          >
            Delete
          </a>
        </footer>
      </div>

      {/* Update Note Popup */}
      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title" style={{color: "#2B2D42"}}>Edit Note</p>
            <button
              onClick={handleClick}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <h1 class="title is-1" style={{color: "#2B2D42"}}>Edit a Note</h1>
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input
                  class="input is-medium"
                  type="text"
                  placeholder={note.title}
                  onChange={onChangeTitle}
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea
                  class="textarea is-medium"
                  placeholder={note.description}
                  onChange={onChangeDescription}
                ></textarea>
              </div>
            </div>
            <div class="control">
              <button
                type="submit"
                class="button is-link is-fullwidth has-text-weight-medium is-medium mb-3 is-rounded"
                onClick={handleUpdate}
                style={{backgroundColor: "#EF233C"}}
              >
                Update Note
              </button>
              <button
                type="submit"
                class="button is-link is-fullwidth has-text-weight-medium is-medium is-rounded"
                onClick={handleClick}
                style={{backgroundColor: "#EF233C"}}
              >
                Cancel
              </button>
            </div>
          </section>
        </div>
      </div>
      {/* Modal */}
    </>
  );
};

export default Note;