import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Note from "./Note";

const ViewNotesList = () => {
  const [notes, setNotes] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const { user } = useContext(AuthContext);
  const token = {
    headers: { token: user.accessToken },
  };

  const handleClick = (e, note) => {
    console.log(e);
    console.log(note);
    setIsModal(!isModal);
    console.log(isModal);
  };

  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/note/view-all-notes/${user._id}`,
        token
      );
      setNotes(res.data.notesOfUser);
    };
    getNotes();
  }, [user._id]);

  console.log(notes);

  const active = isModal ? "is-active" : "";

  return (
    <div class="column has-text-left">
      <h1 class="title is-1">My Notes</h1>
      {notes?.map((note) => {
        return <Note note={note} />;
      })}
    </div>
  );
};

export default ViewNotesList;