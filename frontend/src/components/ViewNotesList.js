//Importing Libraries
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

//Importing Components
import Note from "./Note";

const ViewNotesList = () => {
  const [notes, setNotes] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  const { user } = useContext(AuthContext);
  const token = {
    headers: { token: user.accessToken },
  };

  //On component load, get notes from the DB
  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/note/view-all-notes/${user._id}?page=${pageNumber}`,
        token
      );
      setNotes(res.data.notesOfUser);
      setTotalPages(res.data?.totalPages);
    };
    getNotes();
  }, [pageNumber]);

  const active = isModal ? "is-active" : "";

  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  const goPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const goNext = () => {
    setPageNumber(Math.min(totalPages - 1, pageNumber + 1));
  };

  return (
    <div class="column has-text-left">
      <h1 class="title is-1" style= {{color:"#2B2D42"}}>My Notes</h1>
              {/* Pagination */}
              <nav class="pagination is-rounded" role="navigation" aria-label="pagination" >
        <a class="pagination-previous" onClick={goPrevious}>
          Previous
        </a>
        <a class="pagination-next" onClick={goNext}>
          Next page
        </a>
        <ul class="pagination-list">
        {pages.map((pageIndex) => (
            <li>
              <a
                className={`${
                  pageNumber == pageIndex
                    ? "pagination-link is-current"
                    : "pagination-link"
                }`}
                onClick={() => setPageNumber(pageIndex)}
              >
                {pageIndex + 1}
              </a>
            </li>
             ))}
          </ul>
      </nav>
      
      {notes ? (
        notes.map((note) => <Note note={note} />)
      ) : (
        <ThreeDots color="#EF233C" height={80} width={80} />
      )}

    </div>
  );
};

export default ViewNotesList;