//Importing Libraries
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const CreateNote = () => {
  //Declare states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {user} = useContext(AuthContext);
  const token = {
    headers: {token: user.accessToken},
  }

  //Declare Note submission
  const submitNote = async (e) => {
    e.preventDefault();
    const noteDetails = {
      title: title,
      description: description
    }
    await axios.post(`http://localhost:5000/api/note/create/`,noteDetails, token)
    .then(()=>{
      alert("Note created successfully!");
      window.location.reload();
    })
    .catch((err)=>{
      alert(err);
    })
   }
  

  //Declare onChange functions
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  return (
    <>
      <div class="column is-one-third has-text-left">
        <h1 class="title is-1" style={{color: "#2B2D42"}}>Add a Note</h1>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input is-medium" type="text" value={title} onChange={onChangeTitle} />
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea is-medium" value={description} onChange={onChangeDescription}></textarea>
          </div>
        </div>
        <div class="control">
          <button
            type="submit"
            class="button is-link is-fullwidth has-text-weight-medium is-medium is-rounded"
            onClick={submitNote}
            style={{backgroundColor: "#EF233C"}}
          >
            Create Note
          </button>
        </div>
      </div>
    </>
  );
  }

export default CreateNote;
