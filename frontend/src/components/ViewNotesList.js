import React, { useState } from "react";

const ViewNotesList = () => {
  const [isModal, setIsModal] = useState(false);

  const handleClick = () => {
    setIsModal(!isModal);
    console.log(isModal);
  };

  const active = isModal ? "is-active" : "";

  return (
    <div class="column is-two-thirds has-text-left">
      <h1 class="title is-1">My Notes</h1>
      {/* 1st Note  */}
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Component(Title)</p>
          <button class="card-header-icon" aria-label="more options">
            {/* <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span> */}
          </button>
        </header>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. (Description)
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
      </div>
      {/* 1st Note  */}
      {/* 2nd Note  */}
      <div class="card mt-3">
        <header class="card-header">
          <p class="card-header-title">Componen(Title)</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. (Description)
            <br />
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            Edit
          </a>
          <a href="#" class="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
      {/* 2nd Note  */}

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